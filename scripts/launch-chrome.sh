#!/bin/bash
# Launch Chrome with the ReddTools profile for browser automation
# Usage: ./launch-chrome.sh
# Then connect MCP to http://127.0.0.1:9222

echo "Launching Chrome for ReddTools (port 9222)..."

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --user-data-dir="/Users/sharan/Library/Application Support/Google/Chrome-reddtools" \
  --remote-debugging-port=9222 \
  --no-first-run \
  --no-default-browser-check \
  --remote-allow-origins="*" &

echo "Chrome launched with ReddTools profile."
echo "Connect MCP to: http://127.0.0.1:9222"
echo ""
echo "Accounts available:"
echo "  - Indie Hackers (ReddTools account, colour picker in profile)"
echo "  - Reddit (u/reddtools — warm-up until ~Sep 12, 2026)"
