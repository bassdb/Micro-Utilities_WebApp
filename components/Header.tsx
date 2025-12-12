import { Copy, Check, Palette } from 'lucide-react';
import type { PresetKey } from '@/types/theme';
import { PRESETS } from '@/constants/presets';

interface HeaderProps {
  copied: boolean;
  onCopy: () => void;
  onApplyPreset: (presetKey: PresetKey) => void;
}

export const Header = ({ copied, onCopy, onApplyPreset }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-lg tracking-tight">Tailwind Theme Gen</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
            {(Object.keys(PRESETS) as PresetKey[]).map(preset => (
              <button
                key={preset}
                onClick={() => onApplyPreset(preset)}
                className="px-3 py-1.5 text-xs font-medium rounded-md hover:bg-white hover:shadow-sm dark:hover:bg-slate-800 transition-all capitalize text-slate-600 dark:text-slate-400"
              >
                {preset}
              </button>
            ))}
          </div>

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

