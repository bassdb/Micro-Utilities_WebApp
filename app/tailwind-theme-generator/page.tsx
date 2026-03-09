'use client'

import { useState, useMemo } from 'react';
import { LayoutTemplate, Code, RotateCcw } from 'lucide-react';
import { Header } from '@/components/Header';
import { SidebarTabs } from '@/components/SidebarTabs';
import { PreviewPanel } from '@/components/PreviewPanel';
import { CodePanel } from '@/components/CodePanel';
import { hexToRgb, rgbToHsl } from '@/lib/color-utils';
import { SHADOW_PRESETS } from '@/constants/base-presets';
import { useThemeStore } from '@/stores/theme-store';
import type { CSSVariables, ColorTheme } from '@/types/theme';

export default function TailwindColorGenerator() {
  const {
    themeConfig,
    base,
    isDark,
    selectedFont,
    selectedWeight,
    selectedStyle,
    setColor,
    setRadius,
    setShadowPreset,
    setIsDark,
    setSelectedFont,
    setSelectedWeight,
    setSelectedStyle,
    reset,
  } = useThemeStore();

  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const activeColors = isDark ? themeConfig.dark : themeConfig.light;

  const handleColorChange = (key: string, value: string) => {
    setColor(key, value, isDark ? 'dark' : 'light');
  };

  const cssVariables = useMemo((): CSSVariables => {
    const vars: CSSVariables = {};
    Object.entries(activeColors).forEach(([key, hex]) => {
      const rgb = hexToRgb(hex);
      if (rgb) {
        const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
        vars[`--${key}`] = `${h} ${s}% ${l}%`;
      }
    });
    vars['--radius'] = base.radius;
    const shadows = SHADOW_PRESETS[base.shadowPreset];
    vars['--shadow-sm'] = shadows.sm;
    vars['--shadow-md'] = shadows.md;
    vars['--shadow-lg'] = shadows.lg;
    return vars;
  }, [activeColors, base.radius, base.shadowPreset]);

  const generateCssString = (): string => {
    const generateVars = (colors: ColorTheme): string => {
      return Object.entries(colors).map(([key, hex]) => {
        const rgb = hexToRgb(hex);
        if(!rgb) return '';
        const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
        return `    --${key}: ${h} ${s}% ${l}%; /* ${hex} */`;
      }).join('\n');
    };
    const shadows = SHADOW_PRESETS[base.shadowPreset];
    const baseVars = `  /* Base (shared) */
  --radius: ${base.radius};
  --shadow-sm: ${shadows.sm};
  --shadow-md: ${shadows.md};
  --shadow-lg: ${shadows.lg};
`;

    return `:root {
  ${baseVars}
  /* Light Theme */
${generateVars(themeConfig.light)}
  }
  
  .dark {
  /* Dark Theme */
${generateVars(themeConfig.dark)}
  }`;
  };

  const copyToClipboard = () => {
    const cssContent = generateCssString();
    
    const textArea = document.createElement("textarea");
    textArea.value = cssContent;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const handleRandomize = () => {
    const randomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    handleColorChange('primary', randomHex());
    handleColorChange('secondary', randomHex());
    handleColorChange('accent', randomHex());
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        <Header 
          copied={copied} 
          onCopy={copyToClipboard}
        />

        <main className="container mx-auto px-4 py-8 grid lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* Left Sidebar: Controls */}
          <SidebarTabs
            isDark={isDark}
            activeColors={activeColors}
            radius={base.radius}
            shadowPreset={base.shadowPreset}
            selectedFont={selectedFont}
            selectedWeight={selectedWeight}
            selectedStyle={selectedStyle}
            onToggleDark={setIsDark}
            onColorChange={handleColorChange}
            onRandomize={handleRandomize}
            onRadiusChange={setRadius}
            onShadowPresetChange={setShadowPreset}
            onFontChange={setSelectedFont}
            onWeightChange={setSelectedWeight}
            onStyleChange={setSelectedStyle}
          />

          {/* Right Content: Preview & Code */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'preview' 
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' 
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <LayoutTemplate className="w-4 h-4" /> Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'code' 
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' 
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Code className="w-4 h-4" /> Export Code
                </button>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-400 dark:text-slate-400 transition-colors shrink-0"
                title="Reset to defaults"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            </div>

            {activeTab === 'preview' ? (
              <PreviewPanel 
                cssVariables={cssVariables} 
                selectedFont={selectedFont}
                selectedWeight={selectedWeight}
                selectedStyle={selectedStyle}
              />
            ) : (
              <CodePanel 
                cssContent={generateCssString()} 
                copied={copied}
                onCopy={copyToClipboard}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
