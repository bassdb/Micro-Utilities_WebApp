export interface GoogleFont {
  name: string;
  family: string;
  category: string;
}

export const GOOGLE_FONTS: GoogleFont[] = [
  // Sans Serif
  { name: "Inter", family: "Inter", category: "sans-serif" },
  { name: "Roboto", family: "Roboto", category: "sans-serif" },
  { name: "Open Sans", family: "Open Sans", category: "sans-serif" },
  { name: "Lato", family: "Lato", category: "sans-serif" },
  { name: "Montserrat", family: "Montserrat", category: "sans-serif" },
  { name: "Poppins", family: "Poppins", category: "sans-serif" },
  { name: "Source Sans Pro", family: "Source Sans Pro", category: "sans-serif" },
  { name: "Raleway", family: "Raleway", category: "sans-serif" },
  { name: "Ubuntu", family: "Ubuntu", category: "sans-serif" },
  { name: "Nunito", family: "Nunito", category: "sans-serif" },
  
  // Serif
  { name: "Merriweather", family: "Merriweather", category: "serif" },
  { name: "Lora", family: "Lora", category: "serif" },
  { name: "Playfair Display", family: "Playfair Display", category: "serif" },
  { name: "PT Serif", family: "PT Serif", category: "serif" },
  { name: "Crimson Text", family: "Crimson Text", category: "serif" },
  
  // Mono
  { name: "Fira Code", family: "Fira Code", category: "monospace" },
  { name: "Source Code Pro", family: "Source Code Pro", category: "monospace" },
  { name: "Roboto Mono", family: "Roboto Mono", category: "monospace" },
  { name: "JetBrains Mono", family: "JetBrains Mono", category: "monospace" },
  { name: "Courier Prime", family: "Courier Prime", category: "monospace" },
];

export const getGoogleFontUrl = (fontFamily: string, weights: number[] = [400, 500, 600, 700], italic: boolean = false): string => {
  const font = GOOGLE_FONTS.find(f => f.family === fontFamily);
  if (!font) return '';
  const familyName = font.family.replace(/\s+/g, '+');
  const weightsStr = weights.join(';');
  const italicStr = italic ? ':ital,wght@' : ':wght@';
  return `https://fonts.googleapis.com/css2?family=${familyName}${italicStr}${weightsStr}&display=swap`;
};

export const FONT_WEIGHTS = [
  { label: 'Regular', value: 400 },
  { label: 'Medium', value: 500 },
  { label: 'Semibold', value: 600 },
  { label: 'Bold', value: 700 },
];

export const FONT_STYLES = [
  { label: 'Normal', value: 'normal' },
  { label: 'Italic', value: 'italic' },
];

