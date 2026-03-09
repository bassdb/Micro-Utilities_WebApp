export const RADIUS_PRESETS = [
  { value: '0', label: 'None' },
  { value: '0.25rem', label: 'sm' },
  { value: '0.5rem', label: 'md' },
  { value: '0.75rem', label: 'lg' },
  { value: '1rem', label: 'xl' },
  { value: '1.5rem', label: '2xl' },
  { value: '9999px', label: 'full' },
] as const;

import type { ShadowPresetKey } from '@/types/theme';

export const SHADOW_PRESETS: Record<ShadowPresetKey, { sm: string; md: string; lg: string }> = {
  none: { sm: 'none', md: 'none', lg: 'none' },
  subtle: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  medium: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  strong: {
    sm: '0 2px 4px -2px rgb(0 0 0 / 0.2), 0 4px 8px -4px rgb(0 0 0 / 0.2)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
    lg: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
};
