#!/usr/bin/env python3
"""Monitor emails sent to tools@redd.in for ReddTools directory verification links."""
import imaplib
import email
import re
import json
import sys
from pathlib import Path
from datetime import datetime, timezone, timedelta
from email.utils import parseaddr

# ── Config ──────────────────────────────────────────────────────────
PROTON_CONFIG = Path("/Users/sharan/Documents/Code/email-auto-trasher/proton_config.json")
TARGET_EMAIL = "tools@redd.in"
TARGET_DOMAIN = "redd.in"
STATE_FILE = Path(__file__).parent / "redd_in_state.json"

# ── IMAP ────────────────────────────────────────────────────────────
def load_proton_config() -> dict:
    return json.loads(PROTON_CONFIG.read_text(encoding="utf-8"))

def connect_imap():
    import socket
    config = load_proton_config()
    socket.setdefaulttimeout(10)
    try:
        server = imaplib.IMAP4(config["imap_host"], config["imap_port"])
        server.login(config["username"], config["password"])
        return server
    finally:
        socket.setdefaulttimeout(None)

def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"seen_uids": []}

def save_state(state: dict):
    STATE_FILE.write_text(json.dumps(state, indent=2))

def extract_verification_links(body: str) -> list[str]:
    """Extract verification/confirmation links from email body."""
    # Common patterns: verify, confirm, activate, click here
    urls = re.findall(r'https?://[^\s<>"\'<>]+', body)
    verify_urls = []
    for url in urls:
        url_lower = url.lower()
        if any(kw in url_lower for kw in ['verify', 'confirm', 'activate', 'click', 'confirmemail', 'verification']):
            verify_urls.append(url.rstrip('.,)'))
    return verify_urls

def fetch_emails(server, days: int = 7) -> list[dict]:
    """Fetch emails sent TO tools@redd.in."""
    server.select("INBOX")
    since_date = (datetime.now(timezone.utc) - timedelta(days=days)).strftime("%d-%b-%Y")
    status, messages = server.uid("search", None, f'(SINCE "{since_date}")')
    if status != "OK":
        return []

    msg_uids = messages[0].split()
    emails = []
    for uid in msg_uids:
        uid_str = uid.decode() if isinstance(uid, bytes) else uid
        status, msg_data = server.uid("fetch", uid_str, "(RFC822)")
        if status != "OK" or not msg_data or msg_data[0] is None:
            continue
        raw = msg_data[0][1]
        msg = email.message_from_bytes(raw)

        from_name, from_email = parseaddr(msg.get("From", "Unknown"))

        # Check if this email was sent TO the redd.in domain
        to_header = msg.get("To", "")
        cc_header = msg.get("Cc", "")
        delivered_to = msg.get("Delivered-To", "")
        all_recipients = f"{to_header} {cc_header} {delivered_to}".lower()

        if TARGET_DOMAIN not in all_recipients:
            continue

        # Skip emails sent FROM our own redd.in address (outgoing)
        if from_email.lower().endswith("@redd.in"):
            continue

        # Extract body
        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                ct = part.get_content_type()
                if ct == "text/plain":
                    payload = part.get_payload(decode=True)
                    if payload:
                        body = payload.decode("utf-8", errors="replace")
                        break
                elif ct == "text/html" and not body:
                    payload = part.get_payload(decode=True)
                    if payload:
                        body = payload.decode("utf-8", errors="replace")
        else:
            payload = msg.get_payload(decode=True)
            if payload:
                body = payload.decode("utf-8", errors="replace")

        subject = msg.get("Subject", "(no subject)")
        verify_links = extract_verification_links(body)

        emails.append({
            "uid": uid_str,
            "from_name": from_name,
            "from_email": from_email,
            "subject": subject,
            "to": to_header,
            "date": msg.get("Date", ""),
            "body_preview": body[:500],
            "verify_links": verify_links,
        })

    return emails

def main():
    print(f"[{datetime.now().isoformat()}] ReddTools email monitor starting...")
    print(f"Target: {TARGET_EMAIL}")

    try:
        server = connect_imap()
    except Exception as e:
        print(f"ERROR: Could not connect to IMAP: {e}")
        sys.exit(1)

    print("Connected to Proton IMAP bridge.")
    emails = fetch_emails(server, days=7)
    server.logout()

    if not emails:
        print(f"\nNo emails found sent to {TARGET_EMAIL} in the last 7 days.")
        sys.exit(0)

    state = load_state()
    seen_uids = set(state.get("seen_uids", []))

    new_emails = []
    for e in emails:
        if e["uid"] not in seen_uids:
            new_emails.append(e)

    print(f"\nFound {len(emails)} email(s) sent to redd.in domain ({len(new_emails)} new):\n")

    for e in new_emails:
        print(f"  From: {e['from_name']} <{e['from_email']}>")
        print(f"  To: {e['to']}")
        print(f"  Subject: {e['subject']}")
        print(f"  Date: {e['date']}")
        if e["verify_links"]:
            print(f"  Verification links found:")
            for link in e["verify_links"]:
                print(f"    → {link}")
        else:
            print(f"  No verification links detected in body.")
        print(f"  Body preview: {e['body_preview'][:200]}...")
        print()

        state["seen_uids"].append(e["uid"])

    # Trim state to last 200 UIDs
    state["seen_uids"] = state["seen_uids"][-200:]
    save_state(state)

    if not new_emails:
        print("No new emails since last check.")
    else:
        print(f"\n{len(new_emails)} new email(s) processed. State saved.")

if __name__ == "__main__":
    main()