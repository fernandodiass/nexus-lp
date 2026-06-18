# Nexus — Financial Intelligence Landing Page

Landing page SaaS premium desenvolvida com Next.js 15, TypeScript e Tailwind CSS.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**
- **Canvas API** (animated hero background)

## Design System

### Paleta de Cores
| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#070312` | Background base |
| `--midnight` | `#14045F` | Gradiente escuro |
| `--indigo` | `#48408D` | Gradiente médio |
| `--plum` | `#7A2D68` | Acento principal |
| `--rose-medium` | `#A9697B` | Acento secundário |
| `--rose-light` | `#D1AAB2` | Destaque / texto |

### Tipografia
- Família: `Inter` (system fallback)
- Texto primário: `#F5F2F7`
- Texto secundário: `#D9D3DF`
- Texto muted: `#A7A0B0`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Página principal (assembly)
│   └── globals.css      # CSS global + tokens + animações
├── components/
│   ├── Navbar.tsx       # Sticky nav com glassmorphism
│   ├── Hero.tsx         # Hero animado + canvas BG + dashboard
│   ├── SocialProof.tsx  # Logo strip + métricas
│   ├── Features.tsx     # Bento Grid de features
│   ├── ApiDashboard.tsx # Product showcase com tabs
│   ├── Pricing.tsx      # Pricing cards + toggle anual/mensal
│   ├── Faq.tsx          # Accordion elegante
│   ├── CTASection.tsx   # CTA final
│   └── Footer.tsx       # Footer corporativo
├── lib/
│   └── utils.ts         # cn(), formatCurrency(), formatNumber()
└── types/
    └── index.ts         # Types + design tokens
```

## Instalação

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Preview standalone (sem Node)

Abra `preview.html` diretamente no browser — contém a landing completa em arquivo único.
