export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type HSL = {
  h: number;
  s: number;
  l: number;
};

export type ColorTheme = {
  background: string;
  foreground: string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  accent: string;
  'accent-foreground': string;
  muted: string;
  'muted-foreground': string;
  border: string;
};

export type PresetKey = 'modern' | 'dark' | 'forest' | 'luxury';

export type ThemeConfig = {
  light: ColorTheme;
  dark: ColorTheme;
};

export type ShadowPresetKey = 'none' | 'subtle' | 'medium' | 'strong';

export type BaseTheme = {
  radius: string;
  shadowPreset: ShadowPresetKey;
};

export type CSSVariables = Record<string, string>;

