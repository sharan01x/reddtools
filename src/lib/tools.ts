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
  icon: string;           // SVG path or icon name (Lucide-style)
  keywords: string[];     // Primary SEO keywords for this tool
  status: 'planned' | 'in-progress' | 'live';
  modes?: ToolMode[];     // Sub-pages (e.g. calculator modes, converter types)
}

export interface ToolMode {
  slug: string;           // /calculator/mortgage
  name: string;           // "Mortgage Calculator"
  description: string;
  keywords: string[];
}

export const tools: Tool[] = [
  {
    slug: 'calculator',
    name: 'Calculator',
    shortName: 'Calc',
    description: 'Multi-mode calculator for mortgage, interest, VAT, percentages, and more.',
    icon: 'calculator',
    keywords: ['calculator', 'mortgage calculator', 'interest calculator', 'vat calculator', 'percentage calculator'],
    status: 'live',
    modes: [
      { slug: 'mortgage', name: 'Mortgage Calculator', description: 'Calculate monthly mortgage payments.', keywords: ['mortgage calculator', 'home loan calculator'] },
      { slug: 'compound-interest', name: 'Compound Interest Calculator', description: 'Calculate compound interest on savings.', keywords: ['compound interest calculator'] },
      { slug: 'simple-interest', name: 'Simple Interest Calculator', description: 'Calculate simple interest on a loan.', keywords: ['simple interest calculator'] },
      { slug: 'vat', name: 'VAT Calculator', description: 'Add or remove VAT from a price.', keywords: ['vat calculator', 'vat remover'] },
      { slug: 'percentage', name: 'Percentage Calculator', description: 'Calculate percentage change, difference, and totals.', keywords: ['percentage calculator'] },
      { slug: 'tip', name: 'Tip Calculator', description: 'Split bills and calculate tips.', keywords: ['tip calculator'] },
    ],
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    shortName: 'Convert',
    description: 'Convert between units of length, weight, temperature, volume, speed, and more.',
    icon: 'ruler',
    keywords: ['unit converter', 'kg to lbs', 'miles to km', 'celsius to fahrenheit', 'cups to ml'],
    status: 'live',
    modes: [
      { slug: 'length', name: 'Length Converter', description: 'Convert between units of length — meters, feet, miles, and more.', keywords: ['length converter', 'meters to feet'] },
      { slug: 'weight', name: 'Weight Converter', description: 'Convert weight units.', keywords: ['weight converter', 'kg to lbs'] },
      { slug: 'temperature', name: 'Temperature Converter', description: 'Convert temperature units.', keywords: ['celsius to fahrenheit', 'temperature converter'] },
      { slug: 'volume', name: 'Volume Converter', description: 'Convert volume units.', keywords: ['volume converter', 'cups to ml'] },
      { slug: 'speed', name: 'Speed Converter', description: 'Convert speed units.', keywords: ['speed converter', 'mph to kmh'] },
      { slug: 'data', name: 'Data Storage Converter', description: 'Convert digital storage units.', keywords: ['mb to gb', 'data converter'] },
    ],
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    shortName: 'Words',
    description: 'Count words, characters, sentences, and reading time in real time.',
    icon: 'type',
    keywords: ['word counter', 'character counter', 'word count', 'reading time calculator'],
    status: 'live',
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    shortName: 'Case',
    description: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more.',
    icon: 'case-sensitive',
    keywords: ['case converter', 'uppercase to lowercase', 'camelcase converter', 'snake case converter'],
    status: 'live',
  },
  {
    slug: 'timer',
    name: 'Timer & Pomodoro',
    shortName: 'Timer',
    description: 'Countdown timer, stopwatch, and pomodoro timer with tab-title countdown.',
    icon: 'timer',
    keywords: ['timer', 'pomodoro timer', 'stopwatch', 'countdown timer'],
    status: 'live',
  },
  {
    slug: 'colour-picker',
    name: 'Image Colour Picker',
    shortName: 'Colour',
    description: 'Drop an image and pick exact pixel colours. Get HEX, RGB, and HSL values instantly.',
    icon: 'pipette',
    keywords: ['image color picker', 'hex from image', 'color picker from image', 'eyedropper tool'],
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