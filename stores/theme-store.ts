import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PRESETS } from '@/constants/presets';
import { SHADOW_PRESETS } from '@/constants/base-presets';
import type { ThemeConfig, ShadowPresetKey } from '@/types/theme';

interface ThemeState {
  themeConfig: ThemeConfig;
  base: {
    radius: string;
    shadowPreset: ShadowPresetKey;
  };
  isDark: boolean;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
  setThemeConfig: (config: ThemeConfig | ((prev: ThemeConfig) => ThemeConfig)) => void;
  setColor: (key: string, value: string, mode: 'light' | 'dark') => void;
  setRadius: (radius: string) => void;
  setShadowPreset: (preset: ShadowPresetKey) => void;
  setIsDark: (isDark: boolean) => void;
  setSelectedFont: (font: string) => void;
  setSelectedWeight: (weight: number) => void;
  setSelectedStyle: (style: string) => void;
  reset: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeConfig: {
        light: PRESETS.modern,
        dark: PRESETS.dark,
      },
      base: {
        radius: '0.5rem',
        shadowPreset: 'subtle' as ShadowPresetKey,
      },
      isDark: false,
      selectedFont: 'Inter',
      selectedWeight: 400,
      selectedStyle: 'normal',
      setThemeConfig: (config) =>
        set((state) => ({
          themeConfig: typeof config === 'function' ? config(state.themeConfig) : config,
        })),
      setColor: (key, value, mode) =>
        set((state) => ({
          themeConfig: {
            ...state.themeConfig,
            [mode]: {
              ...state.themeConfig[mode],
              [key]: value,
            },
          },
        })),
      setRadius: (radius) => set((s) => ({ base: { ...s.base, radius } })),
      setShadowPreset: (shadowPreset) => set((s) => ({ base: { ...s.base, shadowPreset } })),
      setIsDark: (isDark) => set({ isDark }),
      setSelectedFont: (selectedFont) => set({ selectedFont }),
      setSelectedWeight: (selectedWeight) => set({ selectedWeight }),
      setSelectedStyle: (selectedStyle) => set({ selectedStyle }),
      reset: () =>
        set({
          themeConfig: { light: PRESETS.modern, dark: PRESETS.dark },
          base: { radius: '0.5rem', shadowPreset: 'subtle' },
          isDark: false,
          selectedFont: 'Inter',
          selectedWeight: 400,
          selectedStyle: 'normal',
        }),
    }),
    {
      name: 'tailwind-theme-gen',
      version: 2,
      migrate: (persistedState: unknown) => {
        const state = persistedState as Record<string, unknown>;
        if (!state?.base || typeof state.base !== 'object') {
          return {
            ...state,
            base: { radius: '0.5rem', shadowPreset: 'subtle' },
          };
        }
        return state;
      },
    }
  )
);
