<div align="center">

<br/>

<img src="https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
<img src="https://img.shields.io/badge/license-MIT-D1AAB2?style=flat-square" alt="MIT"/>

<br/><br/>

# Nexus — Financial Intelligence Landing Page

**Landing page SaaS premium desenvolvida com Next.js 15, React 19, TypeScript e Tailwind CSS.**  
Padrão visual inspirado em Stripe, Linear, Vercel e Raycast — dark luxury, glassmorphism e responsividade fluída.

<br/>

</div>

---

## Índice

- [Visão Geral](#visão-geral)
- [Stack & Tecnologias](#stack--tecnologias)
- [Design System](#design-system)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Instalação e Uso](#instalação-e-uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Responsividade](#responsividade)
- [Deploy](#deploy)
- [Padrões e Convenções](#padrões-e-convenções)

---

## Visão Geral

O **Nexus Landing Page** é um template de landing page SaaS de alta fidelidade para o segmento financeiro institucional. O projeto foi construído com atenção obsessiva a detalhe visual, performance e experiência do usuário — projetado para transmitir a sensação de um produto avaliado em centenas de milhões de dólares.

### Características principais

- **Dark Luxury UI** — paleta roxa/rosa sofisticada sobre fundo quase-preto
- **Glassmorphism Premium** — cards com `backdrop-blur`, bordas sutis e camadas de profundidade
- **Canvas Animado** — background do Hero com partículas e blobs de gradiente animados via `requestAnimationFrame`
- **Scroll Spy** — navbar ativa o item correspondente à seção visível em tempo real
- **Menu Mobile Completo** — drawer animado com overlay, hamburguer e navegação fluída
- **100% Tailwind CSS** — zero `inline styles` para layout, responsividade nativa via breakpoints
- **Gráficos SVG puros** — charts desenhados com SVG nativo, sem bibliotecas externas

---

## Stack & Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.3 | Framework React com App Router |
| [React](https://react.dev/) | 19 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Estilização utilitária |
| [PostCSS](https://postcss.org/) | 8.4 | Processamento CSS |
| Canvas API | nativa | Animação de partículas no Hero |
| SVG nativo | — | Gráficos e charts |

---

## Design System

### Paleta de Cores

A paleta foi desenvolvida para transmitir sofisticação institucional — do vinho profundo ao rosé elegante.

| Token | Variável Tailwind | Hex | Uso |
|---|---|---|---|
| Base | `bg-base` | `#070312` | Background principal |
| Midnight | `bg-midnight` | `#14045F` | Gradientes escuros |
| Indigo | `bg-indigo` | `#48408D` | Gradiente médio, accents |
| Plum | `bg-plum` | `#7A2D68` | Cor de marca primária |
| Rose Medium | `text-rose-med` | `#A9697B` | Accents secundários |
| Rose Light | `text-rose-light` | `#D1AAB2` | Destaques, badges |
| Text Primary | `text-t1` | `#F5F2F7` | Texto principal |
| Text Secondary | `text-t2` | `#D9D3DF` | Texto secundário |
| Text Muted | `text-t3` | `#A7A0B0` | Labels, subtextos |

### Gradientes

```css
/* Marca — botões primários */
bg-grad-brand  →  linear-gradient(135deg, #7A2D68, #48408D)

/* Texto principal */
.grad-text     →  linear-gradient(135deg, #D1AAB2 0%, #A9697B 50%, #7A2D68 100%)

/* Texto secundário */
.grad-text-2   →  linear-gradient(135deg, #D1AAB2, #A9697B)
```

### Shadows (Glow System)

```css
shadow-glow-plum  →  0 0 40px rgba(122,45,104,0.35)   /* Logo, elementos de marca */
shadow-glow-sm    →  0 4px 24px rgba(122,45,104,0.40)  /* Hover em botões */
shadow-glow-lg    →  0 8px 40px rgba(122,45,104,0.50)  /* CTAs ativos */
shadow-card       →  0 20px 60px rgba(0,0,0,0.35)      /* Cards em hover */
shadow-dashboard  →  0 32px 80px rgba(0,0,0,0.60)      /* Dashboard mockup */
```

### Classes de Componente (globals.css)

```css
.glass          /* Glassmorphism base: bg-white/[0.025] + border + backdrop-blur-xl */
.glass-hover    /* Hover state para glass cards */
.grad-text      /* Texto com gradiente principal */
.grad-text-2    /* Texto com gradiente secundário */
.btn-primary    /* Botão primário com gradiente de marca */
.btn-secondary  /* Botão secundário glass */
.btn-ghost      /* Botão transparente para navegação */
.badge          /* Pill badge para labels de seção */
.section-wrap   /* Container max-w-[1200px] com padding responsivo */
```

### Animações

```css
animate-float    /* Levitação suave 6s (floating cards) */
animate-float2   /* Levitação com delay de 2s */
animate-fadein   /* Fade + slide-up de entrada */
```

---

## Estrutura do Projeto

```
nexus-landing/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — metadata SEO, fonte, body
│   │   ├── page.tsx            # Página principal — assembly de todos os componentes
│   │   └── globals.css         # Tailwind directives + design tokens + component layer
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Navegação fixa com scroll spy e menu mobile
│   │   ├── Hero.tsx            # Hero section com canvas animado e dashboard preview
│   │   ├── SocialProof.tsx     # Logo strip de clientes e métricas institucionais
│   │   ├── Features.tsx        # Bento Grid de funcionalidades do produto
│   │   ├── ApiDashboard.tsx    # Product showcase com tabs e gráfico de performance
│   │   ├── Pricing.tsx         # Pricing cards com toggle mensal/anual
│   │   ├── Faq.tsx             # Accordion de perguntas frequentes
│   │   ├── CTASection.tsx      # Call-to-action final
│   │   └── Footer.tsx          # Footer corporativo com newsletter
│   │
│   ├── lib/
│   │   └── utils.ts            # Utilitários: cn(), formatCurrency(), formatNumber()
│   │
│   └── types/
│       └── index.ts            # Interfaces TypeScript e design tokens exportados
│
├── tailwind.config.ts          # Configuração Tailwind com tokens de design customizados
├── tsconfig.json               # TypeScript com path alias @/*
├── next.config.ts              # Configuração Next.js
├── postcss.config.mjs          # PostCSS com Tailwind e Autoprefixer
├── package.json                # Dependências e scripts
├── preview.html                # Preview standalone (abre direto no browser, sem Node)
└── README.md                   # Este arquivo
```

---

## Componentes

### `Navbar`

Navegação fixa com scroll spy em tempo real, menu mobile com drawer animado e overlay.

**Funcionalidades:**
- Scroll spy — detecta a seção ativa e destaca o link correspondente
- Glassmorphism ao rolar — transição suave para `bg-base/90 + backdrop-blur`
- Menu hamburger com drawer deslizante (`max-height` animado)
- Overlay escurece o fundo e fecha o menu ao clicar
- Navegação suave com `scrollTo + getBoundingClientRect` (compensa a navbar fixa de 64px)
- Fecha automaticamente ao redimensionar para desktop

**IDs de navegação:**

| Label | ID da Seção |
|---|---|
| Início | `#hero` |
| Features | `#features` |
| Produto | `#product` |
| Pricing | `#pricing` |
| FAQ | `#faq` |
| Contato | `#footer` |

---

### `Hero`

Hero section full-viewport com canvas animado, mockup do dashboard e floating cards.

**Funcionalidades:**
- Canvas API com partículas e blobs de gradiente animados via `requestAnimationFrame`
- Grid de fundo com `mask-image` radial para fade nas bordas
- Spotlight — glow radial centralizado
- Dashboard mockup com gráfico SVG de performance e barras de alocação
- Floating cards com `animate-float` (visíveis apenas em `lg:`)
- Trust badges responsivos

---

### `SocialProof`

Strip de logos de clientes com fade nas bordas e grid de métricas institucionais.

---

### `Features`

Bento Grid de 6 cards com visuals interativos, glow effects e hover states.

**Cards:**
1. AI Analytics Engine — diagrama SVG de rede neural com overlay de métrica
2. Real-time Data Feeds — sparkline SVG ao vivo
3. Workflow Automation — ícone de grafo
4. Automated Compliance — ícone de escudo
5. Developer-First API — snippet de código com syntax highlighting CSS
6. Institutional Reports — ícone de documento

---

### `ApiDashboard`

Layout de duas colunas com copy à esquerda e dashboard interativo à direita.

**Funcionalidades:**
- 4 tabs clicáveis (Overview, Analytics, Risk, Compliance)
- Gráfico de performance SVG com eixo de meses
- Tabela de portfólios com badges de risco coloridos
- Live badge com ponto verde pulsante

---

### `Pricing`

Três planos com toggle de faturamento mensal/anual. Plano recomendado com escala visual.

**Funcionalidades:**
- Toggle animado com transição CSS suave
- Desconto de 20% aplicado automaticamente no plano anual
- Card "Professional" com highlight top gradient e `scale(1.02)` no desktop
- Feature list com checkmarks coloridos por plano

---

### `Faq`

Accordion elegante com layout de duas colunas — sticky sidebar à esquerda e lista à direita.

**Funcionalidades:**
- 7 perguntas com accordion animado via `max-height` transition
- Sidebar sticky no desktop (`lg:sticky lg:top-24`)
- Ícone `+` com rotação de 45° ao abrir

---

### `CTASection`

Banner de conversão final com gradiente de fundo animado e CTAs em destaque.

---

### `Footer`

Footer corporativo completo com newsletter, links organizados e status de sistema.

**Funcionalidades:**
- Newsletter com feedback visual de sucesso
- Grid de links `2×4` responsivo
- Status pill "All systems operational"
- Gradiente de accent na borda superior

---

## Instalação e Uso

### Pré-requisitos

- Node.js `>= 18.17`
- npm `>= 9` ou pnpm `>= 8`

### Instalação

```bash
# 1. Clone ou extraia o projeto
cd nexus-landing

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no browser.

### Preview sem Node.js

Abra o arquivo `preview.html` diretamente no browser — contém a landing page completa em um único arquivo HTML autocontido, sem necessidade de build ou servidor.

---

## Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com hot reload
npm run build    # Build de produção otimizado
npm run start    # Serve o build de produção localmente
npm run lint     # Lint com ESLint + regras Next.js
```

---

## Responsividade

Todos os componentes são 100% responsivos via breakpoints nativos do Tailwind. Zero `inline styles` para layout.

| Breakpoint | Prefixo | Largura |
|---|---|---|
| Mobile | *(padrão)* | `0px+` |
| Small | `sm:` | `640px+` |
| Medium | `md:` | `768px+` |
| Large | `lg:` | `1024px+` |
| Extra Large | `xl:` | `1280px+` |

### Comportamento por componente

| Componente | Mobile | `md:` | `lg:` |
|---|---|---|---|
| Navbar | Hamburger + drawer | — | Links + CTAs visíveis |
| Hero | Col única, sem floating cards | — | Floating cards visíveis |
| SocialProof | Métricas `2×2` | — | Métricas `4×1` |
| Features | `1 col` | `2 col` | `3 col` bento |
| ApiDashboard | Empilhado | — | Side-by-side |
| Pricing | Cards empilhados | `3 col` | `3 col` com scale |
| FAQ | Accordion full-width | — | Sidebar sticky + accordion |
| CTASection | CTAs em coluna | CTAs inline | — |
| Footer | Coluna única | `2 col` links | `4 col` links |

---

## Deploy

### Vercel (recomendado)

```bash
# Via CLI
npm i -g vercel
vercel

# Ou conecte o repositório em vercel.com
# Build command: next build
# Output directory: .next
```

### Outras plataformas

```bash
# Build estático (opcional)
npm run build

# Docker
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Padrões e Convenções

### Nomenclatura

- **Componentes** — PascalCase: `Navbar.tsx`, `ApiDashboard.tsx`
- **Utilitários** — camelCase: `utils.ts`, `formatCurrency()`
- **Classes Tailwind customizadas** — kebab-case: `.btn-primary`, `.grad-text`, `.glass-hover`
- **IDs de seção** — lowercase: `#hero`, `#features`, `#product`

### Padrões de código

```tsx
// ✅ Layout responsivo com Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ✅ Hover states sem JS
<button className="bg-plum/15 hover:bg-plum/25 transition-colors duration-200">

// ✅ Glassmorphism consistente
<div className="glass glass-hover rounded-2xl p-6">

// ✅ Gradiente de texto
<h2 className="grad-text">Financial intelligence</h2>

// ✅ Navegação suave
function scrollToId(id: string) {
  const el = document.getElementById(id);
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}
```

### Arquitetura de componentes

Cada componente segue a estrutura:
1. `'use client'` — apenas quando necessário (hooks, event listeners)
2. Dados/constantes declarados fora do componente
3. Subcomponentes internos (ex: `MiniChart`, `BentoCard`) no mesmo arquivo
4. Export default no final

---

## Licença

MIT © 2026 Fernando Diass — [fernandodiass.com.br](https://fernandodiass.com.br)

---

<div align="center">

Desenvolvido com Next.js 15 · React 19 · Tailwind CSS 3 · TypeScript 5

</div>
