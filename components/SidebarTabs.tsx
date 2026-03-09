import { Palette, Settings2, Sun, Moon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BasePanel } from './BasePanel';
import { ColorPalette } from './ColorPalette';
import type { ColorTheme, ShadowPresetKey } from '@/types/theme';

interface SidebarTabsProps {
  isDark: boolean;
  activeColors: ColorTheme;
  radius: string;
  shadowPreset: ShadowPresetKey;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
  onToggleDark: (isDark: boolean) => void;
  onColorChange: (key: string, value: string) => void;
  onRandomize: () => void;
  onRadiusChange: (radius: string) => void;
  onShadowPresetChange: (preset: ShadowPresetKey) => void;
  onFontChange: (font: string) => void;
  onWeightChange: (weight: number) => void;
  onStyleChange: (style: string) => void;
}

export const SidebarTabs = ({
  isDark,
  activeColors,
  radius,
  shadowPreset,
  selectedFont,
  selectedWeight,
  selectedStyle,
  onToggleDark,
  onColorChange,
  onRandomize,
  onRadiusChange,
  onShadowPresetChange,
  onFontChange,
  onWeightChange,
  onStyleChange,
}: SidebarTabsProps) => {
  return (
    <Tabs defaultValue="base" className="w-full flex flex-col h-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 bg-slate-100 dark:bg-slate-900 shrink-0">
        <TabsTrigger value="base" className="flex items-center gap-2">
          <Settings2 className="w-4 h-4" />
          Base
        </TabsTrigger>
        <TabsTrigger value="colors" className="flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Colors
        </TabsTrigger>
      </TabsList>

      <TabsContent value="base" className="mt-0 flex-1 min-h-0 overflow-hidden flex flex-col">
        <BasePanel
          radius={radius}
          shadowPreset={shadowPreset}
          selectedFont={selectedFont}
          selectedWeight={selectedWeight}
          selectedStyle={selectedStyle}
          onRadiusChange={onRadiusChange}
          onShadowPresetChange={onShadowPresetChange}
          onFontChange={onFontChange}
          onWeightChange={onWeightChange}
          onStyleChange={onStyleChange}
        />
      </TabsContent>

      <TabsContent value="colors" className="mt-0 flex-1 min-h-0 flex flex-col">
        <div className="grid w-full grid-cols-2 gap-1 p-1 mb-4 rounded-md bg-slate-100 dark:bg-slate-900 shrink-0">
          <button
            type="button"
            onClick={() => onToggleDark(false)}
            className={`flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
              !isDark
                ? 'bg-white dark:bg-slate-800 text-foreground shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Sun className="w-4 h-4" /> Light
          </button>
          <button
            type="button"
            onClick={() => onToggleDark(true)}
            className={`flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
              isDark
                ? 'bg-white dark:bg-slate-800 text-foreground shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Moon className="w-4 h-4" /> Dark
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <ColorPalette
            isDark={isDark}
            activeColors={activeColors}
            onColorChange={onColorChange}
            onRandomize={onRandomize}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};
