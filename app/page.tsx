'use client'

import Link from 'next/link';
import {
  Palette,
  Hash,
  FileJson,
  Image as ImageIcon,
  Code2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface UtilityCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  available: boolean;
}

const UTILITIES: UtilityCard[] = [
  {
    id: 'tailwind-theme-generator',
    title: 'Tailwind Theme Generator',
    description:
      'Erstelle maßgeschneiderte Farbschemata und Font-Konfigurationen für Tailwind CSS. Exportiere direkt als CSS-Variablen.',
    icon: <Palette className="w-8 h-8" />,
    href: '/tailwind-theme-generator',
    available: true,
  },
  {
    id: 'hash-generator',
    title: 'Hash Generator',
    description:
      'Generiere MD5, SHA-256 und andere Hash-Werte für Texte. Nützlich für Checksummen und Kryptografie.',
    icon: <Hash className="w-8 h-8" />,
    href: '#',
    available: false,
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description:
      'Formatiere und validiere JSON-Daten. Minify, pretty-print und konvertiere zwischen Formaten.',
    icon: <FileJson className="w-8 h-8" />,
    href: '#',
    available: false,
  },
  {
    id: 'image-optimizer',
    title: 'Image Optimizer',
    description:
      'Komprimiere und konvertiere Bilder. Ändere Größe, Formate und optimiere für Web.',
    icon: <ImageIcon className="w-8 h-8" />,
    href: '#',
    available: false,
  },
  {
    id: 'code-snippets',
    title: 'Code Snippets',
    description:
      'Sammlung wiederverwendbarer Code-Snippets für häufige Aufgaben und Patterns.',
    icon: <Code2 className="w-8 h-8" />,
    href: '#',
    available: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Hero */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Micro Utilities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Kleine Tools, große Hilfe
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Eine Sammlung nützlicher Mikro-Utilities für Entwickler: Theme-Generatoren,
            Konverter, Formatierer und mehr.
          </p>
        </div>
      </header>

      {/* Utility Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UTILITIES.map((utility) => {
            const cardClassName = `group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
              utility.available
                ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer'
                : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 opacity-75 cursor-not-allowed'
            }`;

            const cardContent = (
              <>
                <div
                  className={`inline-flex p-3 rounded-xl w-fit mb-4 transition-colors ${
                    utility.available
                      ? 'bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {utility.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{utility.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-1 leading-relaxed">
                  {utility.description}
                </p>
                {utility.available ? (
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all">
                    Öffnen
                    <ArrowRight className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-400">
                    Bald verfügbar
                  </span>
                )}
              </>
            );

            return utility.available ? (
              <Link
                key={utility.id}
                href={utility.href}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={utility.id} className={cardClassName} aria-disabled>
                {cardContent}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
