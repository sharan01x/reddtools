// Data module for the ReddTools wallpaper collection.
// Source of truth for both /wallpapers/ (index) and /wallpapers/[slug]/ pages.
// Add a new wallpaper here (file, slug, title, seoTitle, tags, description,
// useCase, width, height, theme) and it automatically gets its own page.
// Images live in public/wallpapers/ (16:10 desktop, 3840x2400 = 4K, JPG quality 85).
// Cards load a 640px WebP from public/wallpapers/thumbs/ (see thumbFor); the
// full-size 4K file is the download target and the detail-page image.

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

/** 640px WebP card thumbnail for a wallpaper (keeps the /wallpapers/ index light). */
export const thumbFor = (w: Wallpaper): string => `/wallpapers/thumbs/${w.slug}.webp`;

export const wallpapers: Wallpaper[] = [
  {
    file: '/wallpapers/misty-pine-forest-morning.jpg',
    slug: 'misty-pine-forest-morning',
    title: 'Misty Pine Forest at Morning',
    seoTitle: 'Misty Pine Forest 4K Wallpaper — Calm Nature Desktop Background',
    tags: ['Nature', 'Forest', 'Mist', 'Minimal', 'Calm'],
    theme: 'nature',
    width: 3840,
    height: 2400,
    description:
      'This misty pine forest wallpaper captures that quiet half-light just after sunrise, when fog still drifts between the trunks and the whole forest feels like it is holding its breath. The palette is deliberately restrained — muted sage greens, soft greys, and a whisper of warm cream where the light gets through — so the image reads as a soft atmospheric wash rather than a busy photograph. Vertical trunks give it structure, but the fog blurs everything else into gentle layers, which keeps desktop icons and menu bars legible no matter where they sit. The mood is calm and grounded: it is the kind of background that lowers the temperature of a busy screen instead of raising it. If your desktop tends toward neutral themes, this one slots straight in.',
    useCase:
      'Works beautifully behind a dark or light icon set because the centre stays soft and low-contrast. Pair it with a forest-green or warm-grey UI accent colour. Because the top third of the image is mostly mist, it is especially good for macOS and Windows layouts where the menu bar overlays the top of the screen.',
  },
  {
    file: '/wallpapers/tranquil-alpine-lake.jpg',
    slug: 'tranquil-alpine-lake',
    title: 'Tranquil Alpine Lake',
    seoTitle: 'Alpine Lake Reflection 4K Wallpaper — Minimal Mountain Desktop Background',
    tags: ['Nature', 'Mountains', 'Lake', 'Pastel', 'Serene'],
    theme: 'nature',
    width: 3840,
    height: 2400,
    description:
      'A mirror-still alpine lake doing its best impression of glass. Snow-capped peaks sit on the horizon in a band of cool white, while the reflection doubles everything below into soft teal. The palette is pastel and airy — pale blues, whispering greys, a touch of warm light on the waterline — and the composition is almost symmetric, which gives the wallpaper a settled, balanced feeling. There is a lot of open sky, so the image stays light under icons and widgets. The mood is clean, cold-air calm: the visual equivalent of a deep breath at altitude. It reads equally well on a laptop in a café and a large desktop monitor, where the reflection detail rewards a closer look.',
    useCase:
      'The wide-open sky makes this a great pick if you keep a lot of desktop clutter or heavy widgets — the top of the screen stays uncluttered. Pair it with a steel-blue or slate accent colour and a light-mode theme. Also a strong fit for a secondary or work machine where you want calm without a wall of colour.',
  },
  {
    file: '/wallpapers/curious-red-fox-meadow.jpg',
    slug: 'curious-red-fox-meadow',
    title: 'Curious Red Fox in Autumn Meadow',
    seoTitle: 'Red Fox 4K Wallpaper — Warm Autumn Animal Desktop Background',
    tags: ['Animals', 'Fox', 'Autumn', 'Warm', 'Wildlife'],
    theme: 'animals',
    width: 3840,
    height: 2400,
    description:
      'A red fox mid-pause in a golden autumn meadow, ears up, giving the camera exactly the kind of sidelong look that makes foxes feel like tiny sceptics. The warm light rakes across the grass, throwing everything into ambers, russets, and honeyed golds, with the fox\'s coat as the clear focal point against a softly blurred meadow. The mood is cosy and a little bit wild — an autumn-evening kind of warmth that makes a screen feel friendlier. The bokeh background keeps the busy meadow texture from fighting with your icons, and the fox sits just off-centre, leaving clean negative space for app docks and folders. It is the rare animal wallpaper that feels composed rather than snapshot-like.',
    useCase:
      'Perfect for a warm-toned desktop theme: pair with amber, burnt-orange, or camel accent colours and a serif display font. The soft lower-left grass gives a good home for a dock. A natural fit for autumn, but the classic warmth holds up year-round. Designers, note the amber-russet pairing works as a palette seed.',
  },
  {
    file: '/wallpapers/majestic-heron-mist.jpg',
    slug: 'majestic-heron-mist',
    title: 'Grey Heron in Morning Mist',
    seoTitle: 'Grey Heron Mist 4K Wallpaper — Minimal Wildlife Desktop Background',
    tags: ['Animals', 'Heron', 'Mist', 'Monochrome', 'Elegant'],
    theme: 'animals',
    width: 3840,
    height: 2400,
    description:
      'A grey heron standing in still water at dawn, folded into its own patience, while low mist erases the horizon. The palette is almost monochrome — layered blue-greys, a hint of dawn warmth at the waterline — with the heron\'s sharp profile as the single point of contrast. That restraint is the point: this is a wallpaper that behaves more like a fine-art print than a wildlife photo. The mood is quiet and slightly formal, good for a workspace where you want focus rather than stimulation. Mist does most of the compositional work, so the frame stays clean around the edges and your icons never fight a busy background. It suits both light and dark UI themes, which is rarer than it should be in a wallpaper.',
    useCase:
      'An excellent choice for dark-mode desktops — the cool grey-blue sits comfortably next to charcoal UI without a harsh seam. Pair with slate or steel accent colours and a clean grotesque typeface. The still-water lower half gives plenty of quiet space for a dock or taskbar.',
  },
  {
    file: '/wallpapers/soft-gradient-abstract.jpg',
    slug: 'soft-gradient-abstract',
    title: 'Soft Gradient Abstract',
    seoTitle: 'Soft Gradient Abstract 4K Wallpaper — Dusty Rose & Lavender Desktop Background',
    tags: ['Abstract', 'Gradient', 'Pastel', 'Minimal', 'Organic'],
    theme: 'abstract',
    width: 3840,
    height: 2400,
    description:
      'An abstract wallpaper built entirely from soft colour in motion: dusty rose bleeding into peach, then lavender, in silky organic curves that never quite resolve into shapes. There is no focal point and none is needed — the composition is one continuous, low-contrast wash that behaves beautifully behind a busy desktop. The palette sits in the warm-neutral corner of pastel, so it flatters both light UI themes and the softer end of dark mode. Because every transition is smooth and edge-free, icons, folders and widgets read cleanly at any position on the screen. The mood is quiet and studio-like: the kind of background that makes a workspace feel considered, like a well-chosen paint colour rather than a picture. If you find photographic wallpapers too literal and geometric ones too insistent, this is the middle path.',
    useCase:
      'A safe, forgiving base for almost any desktop layout — nothing competes with your icons. Pair it with a rose, mauve or warm-grey accent colour and light-mode UI. Also a useful palette reference for designers: sample the gradient stops for a ready-made tri-tone scheme of dusty rose, peach and lavender.',
  },
  {
    file: '/wallpapers/crystalline-fractal-bloom.jpg',
    slug: 'crystalline-fractal-bloom',
    title: 'Crystalline Fractal Bloom',
    seoTitle: 'Fractal Art 4K Wallpaper — Crystalline Indigo & Teal Desktop Background',
    tags: ['Fractals', 'Geometric', 'Crystalline', 'Indigo', 'Detailed'],
    theme: 'fractals',
    width: 3840,
    height: 2400,
    description:
      'A fractal bloom that looks like a crystal growing in fast-forward: an intricate, symmetric structure radiating from the centre in filigree layers of indigo and teal, touched with fine golden accents, against a deep dark ground. The detail is genuinely rewardable — zoom in mentally and new structure keeps appearing, which is the quiet pleasure of good fractal art. Symmetry gives it a meditative, mandala-like gravity, so the wallpaper reads as intentional art rather than screensaver filler. Because the pattern is densest in the centre and darker toward the edges, desktop icons at the margins stay legible. The mood is deep-focus and a little cosmic: a strong pick for evening work sessions and dark-mode setups that want one point of visual interest. It is the maximalist counterweight in a collection that otherwise leans minimal.',
    useCase:
      'Built for dark-mode desktops — the deep indigo ground merges with dark UI chrome. Let the centre sit in open desktop space, not under a dock, so the pattern can breathe. Pair with a teal or gold accent colour for menubar utilities. The indigo-teal-gold palette is a great seed for dark UI themes.',
  },
  {
    file: '/wallpapers/indigo-fractal-current.jpg',
    slug: 'indigo-fractal-current',
    title: 'Indigo Fractal Current',
    seoTitle: 'Indigo Fractal 4K Wallpaper — Teal Recursive Flow Desktop Background',
    tags: ['Fractals', 'Geometric', 'Flow', 'Indigo', 'Teal'],
    theme: 'fractals',
    width: 3840,
    height: 2400,
    description:
      'Where the crystalline bloom in this collection builds outward from a centre, the Indigo Fractal Current moves: recursive ribbon-like structures spiral across the frame like a slow-motion whirlpool rendered in light. The palette is deep indigo and navy — close enough to dark-mode UI chrome to disappear at the edges — with electric teal and soft cyan tracing the flow, and fine silver filaments catching detail between the folds. Density gathers toward the centre and falls away to calm dark margins, so the wallpaper rewards a long look without ever shouting over your icons. It is generative art in the true sense: self-similar, mathematical, and yet somehow organic, like a galaxy photographed mid-rotation. The mood is nocturnal and absorbing — evening deep-work rather than morning calm, an excellent companion for long sessions in front of code or a canvas.',
    useCase:
      'Designed for dark mode: the near-black ground means window chrome blends straight in. Keep the central vortex clear of dock and widget clutter so the recursion can breathe; the dark corners are ideal for icon layouts. Pair it with teal, cyan or ice-blue accent colours, and let it drive a matching dark UI theme — the indigo-teal pairing is a ready-made palette seed for terminal and editor colour schemes.',
  },
  {
    file: '/wallpapers/terracotta-arc-abstract.jpg',
    slug: 'terracotta-arc-abstract',
    title: 'Terracotta Arc Abstract',
    seoTitle: 'Terracotta Abstract 4K Wallpaper — Minimal Arc Geometric Desktop Background',
    tags: ['Abstract', 'Geometric', 'Terracotta', 'Minimal', 'Warm'],
    theme: 'abstract',
    width: 3840,
    height: 2400,
    description:
      'A study in restraint built from overlapping translucent arcs: curved bands of terracotta clay sweep across a warm sand-beige ground, with a deep slate-blue band anchoring the lower half of the frame. Nothing here is literal — the composition reads like a modern gallery poster, one confident gesture of geometry instead of a picture of a thing. The palette is warm and earthy on the upper two-thirds, cooled deliberately by that slate counterweight, so the wallpaper never tips into monotone. A subtle paper-grain texture keeps the flat colour fields from feeling digital and synthetic. Generous negative space occupies the upper third, which is exactly where menu bars, widgets and browser tabs live, so nothing on your screen ever clashes with the art. The mood is warm, considered and unhurried — a workspace that feels styled rather than decorated.',
    useCase:
      'An excellent base for warm-toned desktops: pair with terracotta, clay or camel accent colours and a light-mode UI. The clean upper third makes it especially forgiving for menu-bar-heavy layouts on macOS and Windows. The slate-blue lower band gives docks and taskbars a natural home without any visual collision.',
  },
  {
    file: '/wallpapers/snow-leopard-highland.jpg',
    slug: 'snow-leopard-highland',
    title: 'Snow Leopard on Highland Ledge',
    seoTitle: 'Snow Leopard 4K Wallpaper — Minimal Wildlife Desktop Background',
    tags: ['Animals', 'Snow Leopard', 'Mountains', 'Wildlife', 'Calm'],
    theme: 'animals',
    width: 3840,
    height: 2400,
    description:
      'A snow leopard at rest on a highland ledge, caught in three-quarter profile with the calm, unbothered gaze only a big cat can manage. The coat is the star: thick pale smoke-grey fur with dark rosettes, rendered softly against a blurred mountain valley washed in cool morning light. The palette is deliberately cool and mineral — stone greys, blue shadows, warm cream in the fur highlights — so the wallpaper feels more like a gallery print than a wildlife snapshot. Shallow depth of field keeps the background out of the way, and the open sky area at the top of the frame stays clean under menu bars and widgets. The mood is quiet mountain solitude: dignified, patient, still. It is a rare animal wallpaper that flatters dark and light desktop themes equally, and it rewards a closer look without ever shouting across the workspace.',
    useCase:
      'Excellent for either mode: the cool grey palette blends with dark-mode chrome and stays gentle on light UI. Pair with slate, steel-blue or warm-grey accents and a clean grotesque typeface. The blurred valley in the lower half gives docks and taskbars a natural home. Designers can lift the stone-grey-and-cream palette as a ready-made neutral scheme.',
  },
  {
    file: '/wallpapers/quote-invent-the-future.jpg',
    slug: 'quote-invent-the-future',
    title: 'Invent the Future — Alan Kay',
    seoTitle: 'Invent the Future 4K Wallpaper — Alan Kay Quote Desktop Background (Minimal Dark)',
    tags: ['Quotes', 'Typography', 'Alan Kay', 'Minimal', 'Dark', 'Motivation'],
    theme: 'quotes',
    width: 3840,
    height: 2400,
    description:
      'A real, attributed insight set quietly on a near-black ground: "The best way to predict the future is to invent it." — Alan Kay, 1971, the line he delivered at Xerox PARC that has since become the founding instinct of every builder. The typography is the entire design. The quote sits centre-stage in Inter SemiBold at a generous size, split across two balanced lines in a warm off-white, with the attribution set small beneath in IBM Plex Mono — the engineering flavour of the source matching the character of the man behind it. The background is a barely-there radial glow over deep charcoal, so the frame stays calm and the words do all the work. Nothing decorative, nothing platitudinous: a sentence with a citation, the way a good margin note would read. The mood is quietly ambitious — a reminder you meet every time the screen wakes up.',
    useCase:
      'Built for dark mode: the charcoal ground blends into window chrome, docks and menu bars on macOS, Windows and Linux alike. The quote block sits in the exact centre with clean margins on every side, so icon layouts, widgets and the dock never collide with the words. Pair it with graphite or slate UI accents, a neutral editor theme, and mono-spaced details elsewhere on the desktop — the Plex Mono attribution sets the tone. A natural backdrop for builders, founders, engineers and students, and a good fit for anyone who wants their workspace to open on intent rather than noise.',
  },
  {
    file: '/wallpapers/quote-feynman-create.jpg',
    slug: 'quote-feynman-create',
    title: 'What I Cannot Create — Richard Feynman',
    seoTitle: 'What I Cannot Create 4K Wallpaper — Richard Feynman Quote Desktop Background (Minimal Dark)',
    tags: ['Quotes', 'Typography', 'Richard Feynman', 'Minimal', 'Dark', 'Engineering'],
    theme: 'quotes',
    width: 3840,
    height: 2400,
    description:
      'A real, attributed insight rendered with typographic discipline: "What I cannot create, I do not understand." — the line Richard Feynman left behind on his Caltech blackboard in 1988, second from the bottom of the two famous closing rules that spelled out everything he refused to fake. It has become the working creed of engineers, scientists and anyone who takes first principles seriously, and it makes a quietly demanding companion for a workspace. The typography is the entire design: the quote sits centred in Inter SemiBold at a generous size, split across two balanced lines in warm off-white, with the attribution set small beneath in IBM Plex Mono — the mono register nodding to the blackboard it came from. The ground is deep charcoal with only a barely-there warm radial glow, so the frame stays calm and the sentence does all the work. The mood is exacting and honest: a daily self-test, pinned where your desktop wakes up.',
    useCase:
      'The near-black ground blends seamlessly into dark-mode chrome, docks and menu bars on macOS, Windows and Linux, so the quote appears to float on the desktop itself. The centred block with clean margins on every side leaves icon corners, widgets and a full dock untouched. Pair it with graphite or slate UI accents, a neutral editor theme, and mono details in your terminal — the Plex Mono attribution sets the register. A natural backdrop for developers, researchers, students and anyone who would rather take Feynman\'s daily test than a motivational poster.',
  },
  {
    file: '/wallpapers/geometric-lattice-abstract.jpg',
    slug: 'geometric-lattice-abstract',
    title: 'Geometric Lattice — Indigo & Sand',
    seoTitle: 'Geometric Lattice 4K Wallpaper — Minimal Abstract Line Grid Desktop Background (Indigo & Sand)',
    tags: ['Abstract', 'Geometric', 'Lines', 'Minimal', 'Indigo', 'Generative'],
    theme: 'abstract',
    width: 3840,
    height: 2400,
    description:
      'A quiet exercise in pure structure: thin intersecting lines draw a precise lattice that recedes into depth, tilting from a flat plane into a suggestion of three-dimensional space without ever fully resolving into one. The palette is restrained and considered — a deep indigo ground, warm sand for the primary grid, and a single soft coral line that cuts across the composition once, giving the eye an anchor and the frame a pulse. Generous negative space keeps the whole thing calm; nothing shouts, nothing glows, nothing decorates. The mood is ordered and contemplative — generative-design restraint rather than spectacle, the kind of composition that looks as intentional shrunken to a phone lockscreen as it does full-screen on a monitor. It rewards a second look: follow any line and you notice how the rhythm of the spacing shifts as the grid recedes, a small piece of perceptual depth hidden inside an almost-flat frame.',
    useCase:
      'Ideal for anyone who wants a desktop that feels designed rather than decorated: the indigo ground sits comfortably under both dark- and light-mode chrome, and the low visual density means icons, widgets, a full dock and stacked windows never fight the composition. The subtle depth recession gives overlays and menu bars a natural place to land along the lower third, while the coral accent line keeps the frame from feeling sterile. As a styling system, lift the indigo-sand-coral triad directly into your editor theme, terminal palette or UI accents — the wallpaper doubles as a ready-made colour scheme. Pairs especially well with monospaced and grotesque typefaces, minimal window managers and tidy multi-monitor setups where you want continuity that doesn\u2019t compete with work.',
  },
  {
    file: '/wallpapers/coral-fractal-spiral.jpg',
    slug: 'coral-fractal-spiral',
    title: 'Coral Fractal Spiral — Dusty Rose on Near-Black',
    seoTitle: 'Coral Fractal Spiral 4K Wallpaper — Generative Abstract Desktop Background (Dark)',
    tags: ['Fractals', 'Spiral', 'Generative', 'Dark', 'Coral', 'Mathematics'],
    theme: 'fractals',
    width: 3840,
    height: 2400,
    description:
      'A deep spiral fractal coiling outward across a near-black ground, rendered in a restrained dusty-rose-and-coral register that keeps the mathematics feeling elegant rather than electric. Fine filaments trace the recursion: each turn of the spiral resolves into smaller echoes of itself, the detail tightening toward the core and softening at the rim, so the eye is drawn slowly inward the way a good generative composition should be. The palette is deliberately muted — coral highlights, dusky rose mid-tones and generous black breathing room — trading the usual neon fractal spectacle for something closer to a print you would hang. There is no text, no signature glow and no ornament: just recursion, symmetry and light falling along the fold lines. The mood is contemplative and quietly hypnotic, a wallpaper that rewards both the glance and the long stare, and that reads as clearly on a phone lockscreen as it does across a full desktop.',
    useCase:
      'Made for dark mode: the near-black ground melts into macOS, Windows and Linux window chrome, so the spiral appears to float behind your windows rather than sit beneath them. The core of the spiral sits slightly off-centre with clean margins, leaving menu bars, widgets and a full dock free to land anywhere without visual collision. Pair it with graphite or slate UI accents, a dark editor theme, and coral or rose highlights carried into your terminal palette for a coordinated setup — the palette doubles as a ready-made colour scheme. Particularly suited to developers, mathematicians and anyone who wants their desktop to open on calm recursion rather than noise.',
  },
  {
    file: '/wallpapers/rolling-hills-golden-hour.jpg',
    slug: 'rolling-hills-golden-hour',
    title: 'Rolling Hills at Golden Hour',
    seoTitle: 'Rolling Hills Golden Hour Wallpaper — Calm Nature Scenic Desktop Background (2048×1170)',
    tags: ['Nature', 'Landscape', 'Golden Hour', 'Hills', 'Calm', 'Warm'],
    theme: 'nature',
    width: 2048,
    height: 1170,
    description:
      'Layered waves of grassland rolling toward a hazy distant ridge, caught in the low warm light of golden hour. The palette is soft and pastoral — green and gold grass in the foreground, amber mid-tones where the sun skims the slopes, and a gentle pastel sky above. The composition is deliberately unhurried: each hill sits a half-step behind the last, so the eye travels smoothly from the foreground grass to the horizon without any single element demanding attention. The mood is calm and grounded, closer to an evening walk than a postcard — the kind of landscape that lowers the temperature of a busy screen rather than decorating it. Detail concentrates low in the frame, leaving the sky clean and even, and the overall tonal range stays gentle enough that the image reads as atmosphere rather than photograph. On larger displays the grass texture rewards a closer look; at a distance it settles into quiet bands of colour.',
    useCase:
      'A strong pick for both light- and dark-mode setups: the even sky keeps menu bars and widgets legible, while the soft lower third gives docks and trays a natural home. Pair it with olive, moss or warm-grey UI accents, or carry the amber mid-tones into a terminal or editor theme for a coordinated setup. The horizon sits low enough that the upper half stays uncluttered in multi-window layouts, and the muted contrast means notifications and icons never fight the background. Suits anyone who wants a scenic nature wallpaper that feels composed and restful rather than dramatic — a good default for a work machine, a laptop you carry to cafés, or a weekend desktop.',
  },
  {
    file: '/wallpapers/humpback-whale-quiet-ocean.jpg',
    slug: 'humpback-whale-quiet-ocean',
    title: 'Humpback Whale in Quiet Ocean',
    seoTitle: 'Humpback Whale 4K Wallpaper — Minimal Ocean Wildlife Desktop Background',
    tags: ['Animals', 'Whale', 'Ocean', 'Minimal', 'Calm', 'Dawn'],
    theme: 'animals',
    width: 2048,
    height: 1170,
    description:
      'A humpback whale resting at the calm surface of a still ocean, seen from high above so it reads as a single elegant dark silhouette floating on pale silver-blue water, one soft exhale of mist marking the only movement in the frame. The composition is deliberately sparse: the whale sits just off-centre and everything around it is open water — vast, even negative space that gives the image the feel of a gallery print rather than a wildlife snapshot. The palette is muted and cool — pearl grey, soft slate blue and a faint peach dawn light along the waterline — with no hard edges anywhere, so the whole frame stays low-contrast and gentle on the eye. The mood is patient and immense: the quietest animal in the deepest quiet, exactly the kind of backdrop that lowers the temperature of a busy screen. It rewards a closer look at the subtle water texture around the whale without ever competing with the work on top of it.',
    useCase:
      'A natural fit for both light and dark desktop themes: the pale water flatters light-mode chrome and the silhouette keeps enough depth to sit comfortably behind dark UI. Pair with slate-blue, steel or warm-grey accent colours, and let the whale occupy open desktop space while docks and taskbars land anywhere in the calm water without collision. The even tonal range keeps menu bars, widgets and stacked windows legible in every corner, making it an especially forgiving choice for multi-monitor and laptop-docked setups. Designers can lift the pearl-grey-slate-peach triad as a ready-made coastal palette, and anyone who wants their workspace to open on stillness rather than noise will find this the calmest animal wallpaper in the collection.',
  },
  {
    file: '/wallpapers/quote-rams-less-design.jpg',
    slug: 'quote-rams-less-design',
    title: 'As Little Design as Possible — Dieter Rams',
    seoTitle: 'Dieter Rams Quote Wallpaper — Good Design Is As Little Design As Possible (Minimal Dark)',
    tags: ['Quotes', 'Typography', 'Dieter Rams', 'Minimal', 'Dark', 'Design'],
    theme: 'quotes',
    width: 3840,
    height: 2400,
    description:
      'A real, attributed insight rendered with the discipline it preaches: "Good design is as little design as possible." — the fourth of Dieter Rams\u2019 ten principles, written for Braun in the 1970s and still the loudest one-liner in design criticism. The typography is the entire design: the quote sits centred in a single quiet line set upright in a clean grotesque sans, small against the frame and deliberately restrained, warm off-white on a near-black navy ground, with the attribution set beneath in tracked monospace capitals. A barely-there radial glow lifts the centre of the canvas and falls away to plain dark corners — the only gesture in the frame, and a fitting one: the light comes from restraint, not spectacle. Nothing decorative, nothing gilded; a sentence with a citation, exactly as the principle demands. The mood is calm, self-assured and quietly exacting — a daily standard pinned where the screen wakes up, and the natural companion piece to the collection\u2019s other builder-creed quotes.',
    useCase:
      'Made for dark mode: the charcoal ground dissolves into window chrome, docks and menu bars on macOS, Windows and Linux, so the quote appears to float on the desktop itself. The centred block leaves generous margins on every side, keeping icon corners, widgets and a full dock free from collision with the words. The soft radial glow is gentle enough that the frame never fights a light-mode setup either. Pair it with graphite or warm-grey UI accents, a restrained editor theme, and monospaced details in your terminal — the attribution sets the register. A natural backdrop for designers, engineers and founders, and a good fit for anyone who wants a workspace that opens on intent, proportion and Rams\u2019 own standard: less, but better.',
  },
  {
    file: '/wallpapers/cobalt-fold-abstract.jpg',
    slug: 'cobalt-fold-abstract',
    title: 'Cobalt Fold — Translucent Ribbons on Near-Black',
    seoTitle: 'Cobalt Fold Abstract 4K Wallpaper — Minimal Geometric Desktop Background (Dark)',
    tags: ['Abstract', 'Geometric', 'Cobalt', 'Minimal', 'Dark', 'Generative'],
    theme: 'abstract',
    width: 2048,
    height: 1280,
    description:
      'A generative composition of smoothly folded translucent ribbons crossing a near-black navy ground, rendered in a restrained cobalt-and-ice-blue register. Each fold carries a thin crisp highlight along its edge, so light behaves like line work: the geometry reads as quiet drawing rather than glossy 3D render. The palette is deliberately narrow — deep cobalt, steel-blue translucency and a very dark ground — trading spectacle for depth, with translucency doing the compositional work as the ribbons pass over and under one another. Generous negative space sits in the lower third so the frame stays calm and the upper half carries the structure. The mood is ordered and contemplative, closer to a generative-design print than a screensaver, and it rewards a second look at how the layers overlap. There is no text, no watermark and no ornament anywhere in the frame.',
    useCase:
      'Made for dark mode: the near-black ground dissolves into window chrome, docks and menu bars on macOS, Windows and Linux, so the folds appear to float behind your windows. The strongest structure sits in the upper half while the lower third stays open, giving icons, widgets and a full dock a natural home without fighting the composition. The low contrast keeps stacked windows legible in multi-monitor and laptop-docked setups, and the palette lifts directly into UI accents, terminal colours or a matching dark editor theme. Pairs especially well with monospaced type and minimal window setups, and suits developers, designers and anyone whose desktop should open on calm structure rather than noise.',
  },
  {
    file: '/wallpapers/emerald-fractal-fern.jpg',
    slug: 'emerald-fractal-fern',
    title: 'Emerald Fractal Fern',
    seoTitle: 'Emerald Fractal Wallpaper — Green Recursive Fern Desktop Background (Dark)',
    tags: ['Fractals', 'Nature', 'Emerald', 'Organic', 'Dark', 'Generative'],
    theme: 'fractals',
    width: 2048,
    height: 1152,
    description:
      'A fractal that borrows its silhouette from the garden: fern-like branching unfolds in deep emerald and sage against a dark charcoal ground, each frond splitting into smaller echoes of itself until the recursion dissolves into fine filigree at the tips. A thin rim of warm gold light catches the outermost branches, giving the geometry a bioluminescent feel without tipping into neon. Unlike the mandala-style and spiral entries in this collection, the composition is directional — the branching sweeps diagonally across the frame, so it reads more like a botanical study rendered in mathematics than a centred ornament. Generous dark negative space above and below keeps the whole frame airy. The mood is quiet and alive: fractal art for people who usually find fractal art too loud.',
    useCase:
      'Built for dark mode — the charcoal ground blends into window chrome, docks and menu bars so the fern seems to grow behind your work. Keep the diagonal sweep in open desktop space rather than under a full dock so the recursion can breathe. The green-on-dark palette pairs naturally with terminal themes, dark editor setups and emerald or brass UI accents. Especially good for developers and designers who want a nature reference with mathematical discipline: the palette doubles as a ready-made emerald-sage-gold scheme for dark dashboards and low-light interfaces.',
  },
]
