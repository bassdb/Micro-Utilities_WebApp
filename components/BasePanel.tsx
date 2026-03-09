'use client';

import { Square, Type, Box } from 'lucide-react';
import { FontManager } from './FontManager';
import { RADIUS_PRESETS } from '@/constants/base-presets';
import { SHADOW_PRESETS } from '@/constants/base-presets';
import type { ShadowPresetKey } from '@/types/theme';

interface BasePanelProps {
  radius: string;
  shadowPreset: ShadowPresetKey;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
  onRadiusChange: (radius: string) => void;
  onShadowPresetChange: (preset: ShadowPresetKey) => void;
  onFontChange: (font: string) => void;
  onWeightChange: (weight: number) => void;
  onStyleChange: (style: string) => void;
}

const SHADOW_OPTIONS: { value: ShadowPresetKey; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'subtle', label: 'Subtle' },
  { value: 'medium', label: 'Medium' },
  { value: 'strong', label: 'Strong' },
];

export const BasePanel = ({
  radius,
  shadowPreset,
  selectedFont,
  selectedWeight,
  selectedStyle,
  onRadiusChange,
  onShadowPresetChange,
  onFontChange,
  onWeightChange,
  onStyleChange,
}: BasePanelProps) => {
  return (
    <div className="flex flex-col gap-6 h-full min-h-0">
      {/* Radius - dedicated card */}
      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Square className="w-4 h-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Radius
          </h2>
        </div>
        <span className="text-[10px] text-slate-500 block">Shared border radius for light & dark</span>
        <div className="flex flex-wrap gap-2">
          {RADIUS_PRESETS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onRadiusChange(value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                radius === value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Shadows - dedicated card */}
      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Shadows
          </h2>
        </div>
        <span className="text-[10px] text-slate-500 block">Shadow presets for light & dark</span>
        <div className="flex flex-wrap gap-2">
          {SHADOW_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onShadowPresetChange(value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                shadowPreset === value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Typography - dedicated card, expands to fill available height */}
      <div className="flex flex-col flex-1 min-h-0 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 p-4">
        <div className="flex items-center gap-2 shrink-0">
          <Type className="w-4 h-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Typography
          </h2>
        </div>
        <span className="text-[10px] text-slate-500 block shrink-0">Font family, weight & style</span>
        <div className="flex-1 min-h-0 overflow-hidden mt-3">
          <FontManager
            selectedFont={selectedFont}
            selectedWeight={selectedWeight}
            selectedStyle={selectedStyle}
            onFontChange={onFontChange}
            onWeightChange={onWeightChange}
            onStyleChange={onStyleChange}
          />
        </div>
      </div>
    </div>
  );
};
