// Data module for the ReddTools wallpaper collection.
// Source of truth for both /wallpapers/ (index) and /wallpapers/[slug]/ pages.
// Add a new wallpaper here (file, slug, title, seoTitle, tags, description,
// useCase, width, height, theme) and it automatically gets its own page.
// Images live in public/wallpapers/ (16:10 desktop, 2048x1280, JPG quality 90).

export interface Wallpaper {
  file: string;        // '/wallpapers/<slug>.jpg'
  slug: string;
  title: string;
  seoTitle: string;
  tags: string[];
  description: string;  // mood + palette, ~150-200 words of real copy
  useCase: string;      // why it works as a wallpaper, styling suggestions
  theme: 'nature' | 'animals' | 'quotes' | 'abstract' | 'fractals';
  width: number;
  height: number;
}

export const themes: { id: Wallpaper['theme']; label: string }[] = [
  { id: 'nature', label: 'Nature' },
  { id: 'animals', label: 'Animals' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'fractals', label: 'Fractals' },
];

export const wallpapers: Wallpaper[] = [
  {
    file: '/wallpapers/misty-pine-forest-morning.jpg',
    slug: 'misty-pine-forest-morning',
    title: 'Misty Pine Forest at Morning',
    seoTitle: 'Misty Pine Forest Wallpaper — Calm Nature Desktop Background (HD)',
    tags: ['Nature', 'Forest', 'Mist', 'Minimal', 'Calm'],
    theme: 'nature',
    width: 2048,
    height: 1280,
    description:
      'This misty pine forest wallpaper captures that quiet half-light just after sunrise, when fog still drifts between the trunks and the whole forest feels like it is holding its breath. The palette is deliberately restrained — muted sage greens, soft greys, and a whisper of warm cream where the light gets through — so the image reads as a soft atmospheric wash rather than a busy photograph. Vertical trunks give it structure, but the fog blurs everything else into gentle layers, which keeps desktop icons and menu bars legible no matter where they sit. The mood is calm and grounded: it is the kind of background that lowers the temperature of a busy screen instead of raising it. If your desktop tends toward neutral themes, this one slots straight in.',
    useCase:
      'Works beautifully behind a dark or light icon set because the centre stays soft and low-contrast. Pair it with a forest-green or warm-grey UI accent colour. Because the top third of the image is mostly mist, it is especially good for macOS and Windows layouts where the menu bar overlays the top of the screen.',
  },
  {
    file: '/wallpapers/tranquil-alpine-lake.jpg',
    slug: 'tranquil-alpine-lake',
    title: 'Tranquil Alpine Lake',
    seoTitle: 'Alpine Lake Reflection Wallpaper — Minimal Mountain Desktop Background',
    tags: ['Nature', 'Mountains', 'Lake', 'Pastel', 'Serene'],
    theme: 'nature',
    width: 2048,
    height: 1280,
    description:
      'A mirror-still alpine lake doing its best impression of glass. Snow-capped peaks sit on the horizon in a band of cool white, while the reflection doubles everything below into soft teal. The palette is pastel and airy — pale blues, whispering greys, a touch of warm light on the waterline — and the composition is almost symmetric, which gives the wallpaper a settled, balanced feeling. There is a lot of open sky, so the image stays light under icons and widgets. The mood is clean, cold-air calm: the visual equivalent of a deep breath at altitude. It reads equally well on a laptop in a café and a large desktop monitor, where the reflection detail rewards a closer look.',
    useCase:
      'The wide-open sky makes this a great pick if you keep a lot of desktop clutter or heavy widgets — the top of the screen stays uncluttered. Pair it with a steel-blue or slate accent colour and a light-mode theme. Also a strong fit for a secondary or work machine where you want calm without a wall of colour.',
  },
  {
    file: '/wallpapers/curious-red-fox-meadow.jpg',
    slug: 'curious-red-fox-meadow',
    title: 'Curious Red Fox in Autumn Meadow',
    seoTitle: 'Red Fox Wallpaper — Warm Autumn Animal Desktop Background (HD)',
    tags: ['Animals', 'Fox', 'Autumn', 'Warm', 'Wildlife'],
    theme: 'animals',
    width: 2048,
    height: 1280,
    description:
      'A red fox mid-pause in a golden autumn meadow, ears up, giving the camera exactly the kind of sidelong look that makes foxes feel like tiny sceptics. The warm light rakes across the grass, throwing everything into ambers, russets, and honeyed golds, with the fox\'s coat as the clear focal point against a softly blurred meadow. The mood is cosy and a little bit wild — an autumn-evening kind of warmth that makes a screen feel friendlier. The bokeh background keeps the busy meadow texture from fighting with your icons, and the fox sits just off-centre, leaving clean negative space for app docks and folders. It is the rare animal wallpaper that feels composed rather than snapshot-like.',
    useCase:
      'Perfect for a warm-toned desktop theme: pair with amber, burnt-orange, or camel accent colours and a serif display font. The soft lower-left grass gives a good home for a dock. A natural fit for autumn, but the classic warmth holds up year-round. Designers, note the amber-russet pairing works as a palette seed.',
  },
  {
    file: '/wallpapers/majestic-heron-mist.jpg',
    slug: 'majestic-heron-mist',
    title: 'Grey Heron in Morning Mist',
    seoTitle: 'Grey Heron Mist Wallpaper — Minimal Wildlife Desktop Background',
    tags: ['Animals', 'Heron', 'Mist', 'Monochrome', 'Elegant'],
    theme: 'animals',
    width: 2048,
    height: 1280,
    description:
      'A grey heron standing in still water at dawn, folded into its own patience, while low mist erases the horizon. The palette is almost monochrome — layered blue-greys, a hint of dawn warmth at the waterline — with the heron\'s sharp profile as the single point of contrast. That restraint is the point: this is a wallpaper that behaves more like a fine-art print than a wildlife photo. The mood is quiet and slightly formal, good for a workspace where you want focus rather than stimulation. Mist does most of the compositional work, so the frame stays clean around the edges and your icons never fight a busy background. It suits both light and dark UI themes, which is rarer than it should be in a wallpaper.',
    useCase:
      'An excellent choice for dark-mode desktops — the cool grey-blue sits comfortably next to charcoal UI without a harsh seam. Pair with slate or steel accent colours and a clean grotesque typeface. The still-water lower half gives plenty of quiet space for a dock or taskbar.',
  },
  {
    file: '/wallpapers/typography-breathe.jpg',
    slug: 'typography-breathe',
    title: 'Breathe — Minimal Typography',
    seoTitle: 'Breathe Wallpaper — Minimal Typography Desktop Background (Sage Green)',
    tags: ['Quotes', 'Typography', 'Sage Green', 'Minimal', 'Calm'],
    theme: 'quotes',
    width: 2048,
    height: 1280,
    description:
      'A single word — Breathe — set in a thin modern serif and centred on a soft sage-green gradient, with a single delicate leaf motif for company. That is the whole design, and that is the discipline that makes it work: enormous negative space, one quiet gesture of type, one accent. The palette is sage, celadon, and cream — colours borrowed straight from the calm corner of the wellness spectrum — so the wallpaper reads as gentle rather than decorative. Typography wallpapers live or die on the type, and the high-contrast hairlines of this serif hold up crisply at desktop scale. The mood is a small daily instruction to slow down, which is a nicer thing to open a laptop to than a pile of notification badges.',
    useCase:
      'A natural fit for light-mode setups and wellness or journaling workspaces. Pair it with sage, cream, or warm-grey UI accents and a matching serif for your notes app. Because the word is centred and the edges stay clean, icon layouts of any shape sit comfortably over it.',
  },
  {
    file: '/wallpapers/typography-stay-focused.jpg',
    slug: 'typography-stay-focused',
    title: 'Stay Focused — Minimal Typography',
    seoTitle: 'Focus Wallpaper — Minimal Dark Typography Desktop Background',
    tags: ['Quotes', 'Typography', 'Dark', 'Minimal', 'Focus'],
    theme: 'quotes',
    width: 2048,
    height: 1280,
    description:
      'A single word — Focus — in a clean, thin white sans-serif, centred on a deep charcoal background with a subtle blue-grey gradient and a faint diagonal line texture that only reveals itself when you look. This is the dark-room version of a typography wallpaper: premium, quiet, and just opinionated enough. The near-black base makes it a natural companion for dark mode, and because the type is white-on-charcoal rather than a loud colour, the wallpaper sets a working tone without ever shouting. There is a deliberate premium-poster feel to the spacing — the word sits slightly small in a large field, which reads as confidence rather than emptiness. The mood: deep-work hours, late sessions, screens that mean business.',
    useCase:
      'Made for dark-mode desktops — it blends seamlessly with dark UI chrome, so window edges stop feeling like boxes. Pair it with a single blue or amber accent colour for your dock and menubar utilities. If you use focus wallpapers during deep-work blocks, this one does the job without kitsch.',
  },
  {
    file: '/wallpapers/soft-gradient-abstract.jpg',
    slug: 'soft-gradient-abstract',
    title: 'Soft Gradient Abstract',
    seoTitle: 'Soft Gradient Abstract Wallpaper — Dusty Rose & Lavender Desktop Background',
    tags: ['Abstract', 'Gradient', 'Pastel', 'Minimal', 'Organic'],
    theme: 'abstract',
    width: 2048,
    height: 1280,
    description:
      'An abstract wallpaper built entirely from soft colour in motion: dusty rose bleeding into peach, then lavender, in silky organic curves that never quite resolve into shapes. There is no focal point and none is needed — the composition is one continuous, low-contrast wash that behaves beautifully behind a busy desktop. The palette sits in the warm-neutral corner of pastel, so it flatters both light UI themes and the softer end of dark mode. Because every transition is smooth and edge-free, icons, folders and widgets read cleanly at any position on the screen. The mood is quiet and studio-like: the kind of background that makes a workspace feel considered, like a well-chosen paint colour rather than a picture. If you find photographic wallpapers too literal and geometric ones too insistent, this is the middle path.',
    useCase:
      'A safe, forgiving base for almost any desktop layout — nothing competes with your icons. Pair it with a rose, mauve or warm-grey accent colour and light-mode UI. Also a useful palette reference for designers: sample the gradient stops for a ready-made tri-tone scheme of dusty rose, peach and lavender.',
  },
  {
    file: '/wallpapers/crystalline-fractal-bloom.jpg',
    slug: 'crystalline-fractal-bloom',
    title: 'Crystalline Fractal Bloom',
    seoTitle: 'Fractal Art Wallpaper — Crystalline Indigo & Teal Desktop Background',
    tags: ['Fractals', 'Geometric', 'Crystalline', 'Indigo', 'Detailed'],
    theme: 'fractals',
    width: 2048,
    height: 1280,
    description:
      'A fractal bloom that looks like a crystal growing in fast-forward: an intricate, symmetric structure radiating from the centre in filigree layers of indigo and teal, touched with fine golden accents, against a deep dark ground. The detail is genuinely rewardable — zoom in mentally and new structure keeps appearing, which is the quiet pleasure of good fractal art. Symmetry gives it a meditative, mandala-like gravity, so the wallpaper reads as intentional art rather than screensaver filler. Because the pattern is densest in the centre and darker toward the edges, desktop icons at the margins stay legible. The mood is deep-focus and a little cosmic: a strong pick for evening work sessions and dark-mode setups that want one point of visual interest. It is the maximalist counterweight in a collection that otherwise leans minimal.',
    useCase:
      'Built for dark-mode desktops — the deep indigo ground merges with dark UI chrome. Let the centre sit in open desktop space, not under a dock, so the pattern can breathe. Pair with a teal or gold accent colour for menubar utilities. The indigo-teal-gold palette is a great seed for dark UI themes.',
  },
  {
    file: '/wallpapers/indigo-fractal-current.jpg',
    slug: 'indigo-fractal-current',
    title: 'Indigo Fractal Current',
    seoTitle: 'Indigo Fractal Wallpaper — Teal Recursive Flow Desktop Background (HD)',
    tags: ['Fractals', 'Geometric', 'Flow', 'Indigo', 'Teal'],
    theme: 'fractals',
    width: 2048,
    height: 1170,
    description:
      'Where the crystalline bloom in this collection builds outward from a centre, the Indigo Fractal Current moves: recursive ribbon-like structures spiral across the frame like a slow-motion whirlpool rendered in light. The palette is deep indigo and navy — close enough to dark-mode UI chrome to disappear at the edges — with electric teal and soft cyan tracing the flow, and fine silver filaments catching detail between the folds. Density gathers toward the centre and falls away to calm dark margins, so the wallpaper rewards a long look without ever shouting over your icons. It is generative art in the true sense: self-similar, mathematical, and yet somehow organic, like a galaxy photographed mid-rotation. The mood is nocturnal and absorbing — evening deep-work rather than morning calm, an excellent companion for long sessions in front of code or a canvas.',
    useCase:
      'Designed for dark mode: the near-black ground means window chrome blends straight in. Keep the central vortex clear of dock and widget clutter so the recursion can breathe; the dark corners are ideal for icon layouts. Pair it with teal, cyan or ice-blue accent colours, and let it drive a matching dark UI theme — the indigo-teal pairing is a ready-made palette seed for terminal and editor colour schemes.',
  },
  {
    file: '/wallpapers/terracotta-arc-abstract.jpg',
    slug: 'terracotta-arc-abstract',
    title: 'Terracotta Arc Abstract',
    seoTitle: 'Terracotta Abstract Wallpaper — Minimal Arc Geometric Desktop Background',
    tags: ['Abstract', 'Geometric', 'Terracotta', 'Minimal', 'Warm'],
    theme: 'abstract',
    width: 2048,
    height: 1280,
    description:
      'A study in restraint built from overlapping translucent arcs: curved bands of terracotta clay sweep across a warm sand-beige ground, with a deep slate-blue band anchoring the lower half of the frame. Nothing here is literal — the composition reads like a modern gallery poster, one confident gesture of geometry instead of a picture of a thing. The palette is warm and earthy on the upper two-thirds, cooled deliberately by that slate counterweight, so the wallpaper never tips into monotone. A subtle paper-grain texture keeps the flat colour fields from feeling digital and synthetic. Generous negative space occupies the upper third, which is exactly where menu bars, widgets and browser tabs live, so nothing on your screen ever clashes with the art. The mood is warm, considered and unhurried — a workspace that feels styled rather than decorated.',
    useCase:
      'An excellent base for warm-toned desktops: pair with terracotta, clay or camel accent colours and a light-mode UI. The clean upper third makes it especially forgiving for menu-bar-heavy layouts on macOS and Windows. The slate-blue lower band gives docks and taskbars a natural home without any visual collision.',
  },
];