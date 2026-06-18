// Design tokens
export const colors = {
  roseLight: '#D1AAB2',
  roseMedium: '#A9697B',
  plum: '#7A2D68',
  indigo: '#48408D',
  midnight: '#14045F',
  bg: '#070312',
  textPrimary: '#F5F2F7',
  textSecondary: '#D9D3DF',
  textMuted: '#A7A0B0',
} as const;

// Feature types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  size?: 'default' | 'wide' | 'tall';
  metric?: { value: string; label: string };
}

// Pricing types
export interface PricingPlan {
  id: string;
  name: string;
  price: number | 'Custom';
  period?: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
  badge?: string;
}

// Metric types
export interface Metric {
  value: string;
  label: string;
  trend?: string;
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}

// Nav link types
export interface NavLink {
  label: string;
  href: string;
}
