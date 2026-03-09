# Micro Utilities

> Kleine Tools, große Hilfe — Eine Sammlung nützlicher Mikro-Utilities für Entwickler.

A collection of lightweight web-based developer tools: theme generators, converters, formatters, and more. Built with Next.js and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

---

## ✨ Features

### 🎨 Tailwind Theme Generator (Available)

Create custom color schemes and font configurations for Tailwind CSS with a visual editor:

- **Colors** — Edit primary, secondary, accent, background, foreground, muted, and border colors
- **Light & Dark Mode** — Separate palettes for each theme
- **Radius Presets** — None, sm, md, lg, xl, 2xl, full
- **Shadow Presets** — None, subtle, medium, strong
- **Typography** — Choose from 20+ Google Fonts with weight and style options
- **Live Preview** — See components (buttons, cards, inputs, alerts) update in real time
- **Export** — Copy CSS variables directly for `tailwind.config.js` or `globals.css`

### 🔜 Coming Soon

- Hash Generator (MD5, SHA-256, etc.)
- JSON Formatter
- Image Optimizer
- Code Snippets

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/micro-utilities.git
cd micro-utilities

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| State | Zustand |
| Components | Radix UI, Lucide Icons |
| Language | TypeScript 5 |

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Home / utility overview
│   ├── tailwind-theme-generator/   # Theme generator route
│   └── layout.tsx
├── components/
│   ├── ColorPalette.tsx
│   ├── ExampleSections.tsx         # Preview component demos
│   ├── FontManager.tsx
│   ├── PreviewPanel.tsx
│   └── ...
├── constants/
│   ├── base-presets.ts             # Radius & shadow presets
│   └── google-fonts.ts
├── stores/
│   └── theme-store.ts              # Zustand theme state
├── types/
│   └── theme.ts
└── lib/
    └── color-utils.ts
```

---

## 📜 License

MIT
