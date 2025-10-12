// Lightweight clsx clone: supports strings, numbers, arrays, and object maps.
// Examples:
// cn("p-2", ["text-sm", { "font-medium": isActive }])

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, boolean>;

function clsxLite(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const push = (v: ClassValue): void => {
    if (!v) return;
    const t = typeof v;
    if (t === "string" || t === "number") {
      const s = String(v).trim();
      if (s) out.push(s);
      return;
    }
    if (Array.isArray(v)) {
      for (const item of v) push(item);
      return;
    }
    if (t === "object") {
      for (const [k, val] of Object.entries(v)) {
        if (val) out.push(k);
      }
    }
  };

  for (const i of inputs) push(i);
  return out.join(" ");
}

// Pragmatic Tailwind "last one wins" merge for common groups.
// This avoids bringing tailwind-merge. Not exhaustive, just practical.
interface GroupSpec {
  key: string;
  re: RegExp;
}

// Note: order here determines conflict resolution scanning.
const GROUPS: GroupSpec[] = [
  {
    key: "display",
    re: /^(hidden|block|inline|inline-block|flex|inline-flex|grid|inline-grid|table|inline-table|flow-root)$/,
  },
  { key: "position", re: /^(static|fixed|absolute|relative|sticky)$/ },

  // Spacing
  { key: "m", re: /^-?m[trblxy]?-.+/ },
  { key: "p", re: /^p[trblxy]?-.+/ },
  { key: "space-x", re: /^-?space-x-.+/ },
  { key: "space-y", re: /^-?space-y-.+/ },

  // Sizing
  { key: "w", re: /^w-.+/ },
  { key: "h", re: /^h-.+/ },
  { key: "min-w", re: /^min-w-.+/ },
  { key: "max-w", re: /^max-w-.+/ },
  { key: "min-h", re: /^min-h-.+/ },
  { key: "max-h", re: /^max-h-.+/ },

  // Typography and color
  { key: "text", re: /^text-.+/ },
  { key: "font", re: /^font-.+/ },
  { key: "leading", re: /^leading-.+/ },
  { key: "tracking", re: /^tracking-.+/ },
  { key: "whitespace", re: /^whitespace-.+/ },
  { key: "break", re: /^break-.+/ },
  { key: "uppercase", re: /^(uppercase|lowercase|capitalize|normal-case)$/ },

  { key: "bg", re: /^bg-.+/ },
  { key: "border", re: /^border(-[trblxy])?-.+|^border$/ },
  { key: "rounded", re: /^rounded(-[trbl]{1,2})?-.+|^rounded$/ },
  { key: "shadow", re: /^shadow(-.+)?$/ },
  { key: "opacity", re: /^opacity-.+/ },

  // Ring
  { key: "ring", re: /^ring(-.+)?$/ },
  { key: "ring-offset", re: /^ring-offset(-.+)?$/ },

  // Layout alignment
  { key: "justify", re: /^justify-.+/ },
  { key: "items", re: /^items-.+/ },
  { key: "content", re: /^content-.+/ },
  { key: "place-items", re: /^place-items-.+/ },
  { key: "place-content", re: /^place-content-.+/ },
  { key: "gap", re: /^gap(-[xy])?-.+/ },

  // Z-index and order
  { key: "z", re: /^z-.+/ },
  { key: "order", re: /^order-.+/ },
];

// Find the first matching group key for a utility class
function groupFor(token: string): string | undefined {
  for (const g of GROUPS) {
    if (g.re.test(token)) return g.key;
  }
  return undefined;
}

// Merge Tailwind classes so that the last class in the same group wins,
// while preserving the overall order.
function mergeTailwind(tokens: string[]): string[] {
  const result: string[] = [];
  const indexByGroup = new Map<string, number>();

  for (const token of tokens) {
    const g = groupFor(token);
    if (!g) {
      result.push(token);
      continue;
    }
    const existingIndex = indexByGroup.get(g);
    if (existingIndex !== undefined) {
      result[existingIndex] = token;
    } else {
      indexByGroup.set(g, result.length);
      result.push(token);
    }
  }

  return result;
}

/**
 * cn: zero-dependency utility to compose className strings.
 * - Flattens clsx-style inputs (strings, arrays, object maps)
 * - Applies a pragmatic Tailwind "last one wins" merge for common groups
 */
export function cn(...inputs: ClassValue[]): string {
  const flat = clsxLite(...inputs);
  if (!flat) return "";
  const tokens = flat.split(/\s+/).filter(Boolean);
  return mergeTailwind(tokens).join(" ");
}
