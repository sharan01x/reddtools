/**
 * ReddTools — Tool Registry
 * Central definition of all tools in the suite.
 * Used by the index page, navigation, sitemap, and cross-promo.
 */

export interface Tool {
  slug: string;           // URL path: /calculator, /unit-converter
  name: string;           // Display name: "Calculator"
  shortName: string;      // Nav label: "Calc"
  description: string;    // SEO meta description + index page card
  seoTitle?: string;      // Optimised <title> tag (from seo-copy-deck.md)
  seoDescription?: string; // Optimised meta description (from seo-copy-deck.md)
  seoH1?: string;         // Optimised H1 heading (from seo-copy-deck.md)
  icon: string;           // SVG path or icon name (Lucide-style)
  keywords: string[];     // Primary SEO keywords for this tool
  status: 'planned' | 'in-progress' | 'live';
  modes?: ToolMode[];     // Sub-pages (e.g. calculator modes, converter types)
}

export interface ToolMode {
  slug: string;           // /calculator/mortgage
  name: string;           // "Mortgage Calculator"
  description: string;
  seoTitle?: string;      // Optimised <title> tag
  seoDescription?: string; // Optimised meta description
  seoH1?: string;         // Optimised H1 heading
  keywords: string[];
}

export const tools: Tool[] = [
  {
    slug: 'calculator',
    name: 'Calculator',
    shortName: 'Calc',
    description: 'Multi-mode calculator for mortgage, interest, VAT, percentages, and more.',
    seoTitle: 'Free Online Calculator — Basic & Scientific',
    seoDescription: 'Fast online calculator for basic arithmetic and scientific functions. Free, responsive, no signup.',
    seoH1: 'Calculator',
    icon: 'calculator',
    keywords: ['calculator', 'mortgage calculator', 'interest calculator', 'vat calculator', 'percentage calculator'],
    status: 'live',
    modes: [
      { slug: 'mortgage', name: 'Mortgage Calculator', description: 'Calculate your monthly mortgage payment and total interest over the loan term.', seoTitle: 'Free Mortgage Calculator — Monthly Payments & Total Interest', seoDescription: 'Calculate your monthly mortgage payment and total interest over the loan term. Free, instant, no signup required. Compare 15-year vs 30-year.', seoH1: 'Mortgage Calculator', keywords: ['mortgage calculator', 'home loan calculator', 'mortgage payment calculator', 'mortgage interest calculator'] },
      { slug: 'compound-interest', name: 'Compound Interest Calculator', description: 'Calculate compound interest on your savings or investments.', seoTitle: 'Free Compound Interest Calculator — Savings Growth', seoDescription: 'Calculate compound interest on savings and investments. See how your money grows over time. Free, instant, no signup.', seoH1: 'Compound Interest Calculator', keywords: ['compound interest calculator', 'savings calculator', 'investment growth calculator'] },
      { slug: 'simple-interest', name: 'Simple Interest Calculator', description: 'Calculate simple interest on a loan or investment.', seoTitle: 'Free Simple Interest Calculator — Loans & Investments', seoDescription: 'Calculate simple interest on loans and investments instantly. Free, no signup required.', seoH1: 'Simple Interest Calculator', keywords: ['simple interest calculator', 'loan interest calculator'] },
      { slug: 'vat', name: 'VAT Calculator', description: 'Add or remove VAT from any price instantly.', seoTitle: 'Free VAT Calculator — Add or Remove VAT', seoDescription: 'Add or remove VAT from any price instantly. Works for any VAT rate — UK 20%, Spain 21%, Germany 19% and more. Free, no signup.', seoH1: 'VAT Calculator', keywords: ['vat calculator', 'vat remover', 'vat adder'] },
      { slug: 'percentage', name: 'Percentage Calculator', description: 'Calculate percentage change, difference, and totals.', seoTitle: 'Free Percentage Calculator — Increase, Decrease & Change', seoDescription: 'Calculate percentages quickly: percentage of a number, percentage change, increase or decrease. Free, no signup.', seoH1: 'Percentage Calculator', keywords: ['percentage calculator', 'percent change calculator', 'percentage increase calculator'] },
      { slug: 'tip', name: 'Tip Calculator', description: 'Split bills and calculate tips.', seoTitle: 'Free Tip Calculator — Split Bills & Calculate Tips', seoDescription: 'Calculate tips and split bills between any number of people. Enter bill amount, tip percentage, and diners. Free, no signup.', seoH1: 'Tip Calculator', keywords: ['tip calculator', 'bill splitter', 'gratuity calculator'] },
    ],
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    shortName: 'Convert',
    description: 'Convert between units of length, weight, temperature, volume, speed, and more.',
    seoTitle: 'Free Unit Converter — Length, Weight, Temperature & More',
    seoDescription: 'Convert between units of length, weight, temperature, volume, speed, and data storage. Free online unit converter, no signup.',
    seoH1: 'Unit Converter',
    icon: 'ruler',
    keywords: ['unit converter', 'kg to lbs', 'miles to km', 'celsius to fahrenheit', 'cups to ml'],
    status: 'live',
    modes: [
      { slug: 'length', name: 'Length Converter', description: 'Convert between units of length — metres, feet, miles, and more.', seoTitle: 'Length Converter — CM to Inches, Feet to Meters, Miles to KM', seoDescription: 'Convert length units instantly: centimeters, inches, feet, meters, miles, kilometers. Free online length converter with precise results.', seoH1: 'Length Converter', keywords: ['length converter', 'meters to feet', 'cm to inches', 'miles to km', 'feet to meters'] },
      { slug: 'weight', name: 'Weight Converter', description: 'Convert between weight and mass units.', seoTitle: 'Free Weight Converter — KG to LBS, Grams to Ounces', seoDescription: 'Convert weight units instantly: kilograms, grams, pounds, ounces, tonnes, and stones. Free online weight converter, no signup.', seoH1: 'Weight Converter', keywords: ['weight converter', 'kg to lbs', 'grams to ounces'] },
      { slug: 'temperature', name: 'Temperature Converter', description: 'Convert between Celsius, Fahrenheit, and Kelvin.', seoTitle: 'Free Temperature Converter — Celsius, Fahrenheit & Kelvin', seoDescription: 'Convert temperature units instantly: Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin. Free online temperature converter, no signup.', seoH1: 'Temperature Converter', keywords: ['celsius to fahrenheit', 'temperature converter', 'fahrenheit to celsius'] },
      { slug: 'volume', name: 'Volume Converter', description: 'Convert between volume units for cooking and baking.', seoTitle: 'Free Volume Converter — ML, Cups, Tablespoons & More', seoDescription: 'Convert volume units instantly: millilitres, litres, cups, tablespoons, teaspoons, pints, and gallons. Free online volume converter, no signup.', seoH1: 'Volume Converter', keywords: ['volume converter', 'cups to ml', 'tablespoons to cups'] },
      { slug: 'speed', name: 'Speed Converter', description: 'Convert between speed units.', seoTitle: 'Free Speed Converter — MPH to KM/H, Knots & More', seoDescription: 'Convert speed units instantly: m/s, km/h, mph, knots, and ft/s. Free online speed converter, no signup.', seoH1: 'Speed Converter', keywords: ['speed converter', 'mph to kmh', 'knots to kmh'] },
      { slug: 'data', name: 'Data Storage Converter', description: 'Convert between digital storage units.', seoTitle: 'Free Data Storage Converter — Bytes, KB, MB, GB, TB', seoDescription: 'Convert digital storage units instantly: bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes. Free online data converter, no signup.', seoH1: 'Data Storage Converter', keywords: ['mb to gb', 'data converter', 'bytes to mb'] },
    ],
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    shortName: 'Words',
    description: 'Count words, characters, sentences, and reading time in real time.',
    seoTitle: 'Free Word Counter — Count Words, Characters & Reading Time',
    seoDescription: 'Count words, characters, sentences, paragraphs, and estimated reading time in real time. Free online word counter, no signup.',
    seoH1: 'Word Counter',
    icon: 'type',
    keywords: ['word counter', 'character counter', 'word count', 'reading time calculator'],
    status: 'live',
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    shortName: 'Case',
    description: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.',
    seoTitle: 'Free Case Converter — Uppercase, Lowercase, Snake & Kebab Case',
    seoDescription: 'Convert text between uppercase, lowercase, Title Case, snake_case, and kebab-case instantly. Free developer utility, no signup.',
    seoH1: 'Case Converter',
    icon: 'case-sensitive',
    keywords: ['case converter', 'uppercase to lowercase', 'camelcase converter', 'snake case converter'],
    status: 'live',
  },
  {
    slug: 'timer',
    name: 'Timer & Pomodoro',
    shortName: 'Timer',
    description: 'Countdown timer, stopwatch, and pomodoro timer with tab-title countdown.',
    seoTitle: 'Free Online Timer — Countdown, Stopwatch & Pomodoro',
    seoDescription: 'Simple online timer with countdown, stopwatch, and Pomodoro modes. Free, full-screen friendly, no signup.',
    seoH1: 'Online Timer',
    icon: 'timer',
    keywords: ['timer', 'pomodoro timer', 'stopwatch', 'countdown timer', 'fullscreen timer'],
    status: 'live',
  },
  {
    slug: 'colour-picker',
    name: 'Image Colour Picker',
    shortName: 'Colour',
    description: 'Drop an image and pick exact pixel colours. Get HEX, RGB, and HSL values instantly.',
    seoTitle: 'Free Colour Picker — Hex, RGB, HSL & Contrast Checker',
    seoDescription: 'Instant colour picker with hex, RGB, and HSL values. Built-in contrast checker for accessibility. Free, fast, no signup.',
    seoH1: 'Colour Picker',
    icon: 'pipette',
    keywords: ['image color picker', 'hex from image', 'color picker from image', 'eyedropper tool', 'hex to rgb', 'contrast checker'],
    status: 'live',
  },
];

/** Get all live/in-progress tools for navigation */
export const activeTools = tools.filter(t => t.status !== 'planned');

/** SVG icons for each tool (shared between index page and cross-promo) */
export const toolIconSvg: Record<string, string> = {
  calculator: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="48" height="12" rx="3"/><rect x="8" y="26" width="14" height="12" rx="2"/><rect x="25" y="26" width="14" height="12" rx="2"/><rect x="42" y="26" width="14" height="12" rx="2"/><rect x="8" y="44" width="14" height="12" rx="2"/><rect x="25" y="44" width="14" height="12" rx="2"/><rect x="42" y="44" width="14" height="12" rx="2"/></svg>`,
  'unit-converter': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 48L48 16"/><polyline points="40 16 48 16 48 24"/><polyline points="24 48 16 48 16 40"/></svg>`,
  'word-counter': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16h48"/><path d="M8 28h36"/><path d="M8 40h24"/><path d="M8 52h40"/></svg>`,
  'case-converter': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 48L24 16l12 32"/><path d="M16 40h16"/><path d="M44 16v32"/><path d="M38 28h12"/></svg>`,
  timer: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><path d="M32 18v14l10 10"/></svg>`,
  'colour-picker': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M38 8L16 30l6 6 22-22"/><path d="M22 36L14 50l14-8"/></svg>`,
};

/** Get a tool by slug */
export function getTool(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug);
}

/** Get all tool pages (including modes) for sitemap/cross-promo */
export function getAllPages(): { tool: Tool; mode?: ToolMode }[] {
  const pages: { tool: Tool; mode?: ToolMode }[] = [];
  for (const tool of tools) {
    if (tool.modes) {
      for (const mode of tool.modes) {
        pages.push({ tool, mode });
      }
    } else {
      pages.push({ tool });
    }
  }
  return pages;
}