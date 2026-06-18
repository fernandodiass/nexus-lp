import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-light': '#D1AAB2',
        'rose-med':   '#A9697B',
        plum:         '#7A2D68',
        indigo:       '#48408D',
        midnight:     '#14045F',
        base:         '#070312',
        't1':         '#F5F2F7',
        't2':         '#D9D3DF',
        't3':         '#A7A0B0',
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #7A2D68, #48408D)',
        'grad-text':  'linear-gradient(135deg, #D1AAB2 0%, #A9697B 50%, #7A2D68 100%)',
        'grad-text2': 'linear-gradient(135deg, #D1AAB2, #A9697B)',
      },
      boxShadow: {
        'glow-plum': '0 0 40px rgba(122,45,104,0.35)',
        'glow-sm':   '0 4px 24px rgba(122,45,104,0.40)',
        'glow-lg':   '0 8px 40px rgba(122,45,104,0.50)',
        'card':      '0 20px 60px rgba(0,0,0,0.35)',
        'dashboard': '0 32px 80px rgba(0,0,0,0.6)',
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'float2':  'float 6s ease-in-out infinite 2s',
        'fadein':  'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        float:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        fadeIn: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
} satisfies Config;
