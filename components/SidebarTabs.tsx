import { Palette, Type } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ColorPalette } from './ColorPalette';
import { FontManager } from './FontManager';
import type { ColorTheme } from '@/types/theme';

interface SidebarTabsProps {
  isDark: boolean;
  activeColors: ColorTheme;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
  onToggleDark: () => void;
  onColorChange: (key: string, value: string) => void;
  onRandomize: () => void;
  onFontChange: (font: string) => void;
  onWeightChange: (weight: number) => void;
  onStyleChange: (style: string) => void;
}

export const SidebarTabs = ({
  isDark,
  activeColors,
  selectedFont,
  selectedWeight,
  selectedStyle,
  onToggleDark,
  onColorChange,
  onRandomize,
  onFontChange,
  onWeightChange,
  onStyleChange,
}: SidebarTabsProps) => {
  return (
    <Tabs defaultValue="colors" className="w-full flex flex-col h-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 bg-slate-100 dark:bg-slate-900 flex-shrink-0">
        <TabsTrigger value="colors" className="flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Colors
        </TabsTrigger>
        <TabsTrigger value="fonts" className="flex items-center gap-2">
          <Type className="w-4 h-4" />
          Fonts
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="colors" className="mt-0 flex-1 min-h-0">
        <ColorPalette
          isDark={isDark}
          activeColors={activeColors}
          onToggleDark={onToggleDark}
          onColorChange={onColorChange}
          onRandomize={onRandomize}
        />
      </TabsContent>
      
      <TabsContent value="fonts" className="mt-0 flex-1 min-h-0 overflow-hidden">
        <FontManager
          selectedFont={selectedFont}
          selectedWeight={selectedWeight}
          selectedStyle={selectedStyle}
          onFontChange={onFontChange}
          onWeightChange={onWeightChange}
          onStyleChange={onStyleChange}
        />
      </TabsContent>
    </Tabs>
  );
};

