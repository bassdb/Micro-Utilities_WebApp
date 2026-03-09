import Link from 'next/link';
import { Copy, Check, Palette, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  copied: boolean;
  onCopy: () => void;
}

export const Header = ({ copied, onCopy }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-lg tracking-tight">Tailwind Theme Gen</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy CSS'}
          </button>
        </div>
      </div>
    </header>
  );
};

