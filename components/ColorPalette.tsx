import { RefreshCcw } from 'lucide-react';
import { ColorCard } from './ColorCard';
import type { ColorTheme } from '@/types/theme';

interface ColorPaletteProps {
  isDark: boolean;
  activeColors: ColorTheme;
  onColorChange: (key: string, value: string) => void;
  onRandomize: () => void;
}

export const ColorPalette = ({ 
  isDark, 
  activeColors, 
  onColorChange,
  onRandomize 
}: ColorPaletteProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            {isDark ? 'Dark Mode Palette' : 'Light Mode Palette'}
          </h2>
          <span className="text-[10px] text-slate-500">Editing {isDark ? '.dark' : ':root'}</span>
        </div>
        
        <div className="flex items-center justify-end">
          <button 
            onClick={onRandomize}
            className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors"
            title="Randomize Accents"
          >
            <RefreshCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Base Colors */}
        <div className="col-span-2">
          <label className="text-xs font-semibold text-slate-500 mb-2 block">Base</label>
          <div className="grid grid-cols-2 gap-3">
            <ColorCard label="Background" colorKey="background" hexValue={activeColors.background} onChange={onColorChange} />
            <ColorCard label="Foreground" colorKey="foreground" hexValue={activeColors.foreground} onChange={onColorChange} />
          </div>
        </div>

        {/* Brand Colors */}
        <div className="col-span-2 mt-2">
          <label className="text-xs font-semibold text-slate-500 mb-2 block">Brand</label>
          <div className="grid grid-cols-2 gap-3">
            <ColorCard label="Primary" colorKey="primary" hexValue={activeColors.primary} onChange={onColorChange} />
            <ColorCard label="Prim. FG" colorKey="primary-foreground" hexValue={activeColors['primary-foreground']} onChange={onColorChange} />
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="col-span-2 mt-2">
          <label className="text-xs font-semibold text-slate-500 mb-2 block">Secondary</label>
          <div className="grid grid-cols-2 gap-3">
            <ColorCard label="Secondary" colorKey="secondary" hexValue={activeColors.secondary} onChange={onColorChange} />
            <ColorCard label="Sec. FG" colorKey="secondary-foreground" hexValue={activeColors['secondary-foreground']} onChange={onColorChange} />
          </div>
        </div>

        {/* UI Elements */}
        <div className="col-span-2 mt-2">
          <label className="text-xs font-semibold text-slate-500 mb-2 block">UI Elements</label>
          <div className="grid grid-cols-2 gap-3">
            <ColorCard label="Border" colorKey="border" hexValue={activeColors.border} onChange={onColorChange} />
            <ColorCard label="Muted" colorKey="muted" hexValue={activeColors.muted} onChange={onColorChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

