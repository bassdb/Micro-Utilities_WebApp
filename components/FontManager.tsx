import { useState, useEffect } from 'react';
import { Search, Check, Bold, Italic } from 'lucide-react';
import { GOOGLE_FONTS, getGoogleFontUrl, FONT_WEIGHTS, FONT_STYLES, type GoogleFont } from '@/constants/google-fonts';

export interface FontConfig {
  family: string;
  weight: number;
  style: string;
}

interface FontManagerProps {
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
  onFontChange: (font: string) => void;
  onWeightChange: (weight: number) => void;
  onStyleChange: (style: string) => void;
}

export const FontManager = ({ 
  selectedFont, 
  selectedWeight,
  selectedStyle,
  onFontChange, 
  onWeightChange,
  onStyleChange 
}: FontManagerProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'sans-serif', 'serif', 'monospace'];
  
  const filteredFonts = GOOGLE_FONTS.filter(font => {
    const matchesSearch = font.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || font.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Load Google Font when font, weight, or style changes
  useEffect(() => {
    const weights = FONT_WEIGHTS.map(w => w.value);
    const italic = selectedStyle === 'italic';
    const linkId = 'google-font-link';
    let link = document.getElementById(linkId) as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    
    link.href = getGoogleFontUrl(selectedFont, weights, italic);
  }, [selectedFont, selectedStyle]);

  const handleFontSelect = (font: GoogleFont) => {
    onFontChange(font.family);
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-200px)]">
      <div className="flex flex-col gap-2 mb-4 flex-shrink-0">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
          Font Family
        </h2>
        <span className="text-[10px] text-slate-500">Choose a Google Font</span>
      </div>

      {/* Search */}
      <div className="relative mb-4 flex-shrink-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search fonts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border text-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap mb-4 flex-shrink-0">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>

      {/* Font Style Controls */}
      {selectedFont && (
        <div className="mb-4 flex-shrink-0 space-y-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Font Style
            </h3>
            <span className="text-xs text-slate-500" style={{ fontFamily: `"${selectedFont}", sans-serif` }}>
              {selectedFont}
            </span>
          </div>
          
          {/* Font Weight */}
          <div>
            <label className="text-xs text-slate-600 dark:text-slate-400 mb-2 block flex items-center gap-1">
              <Bold className="w-3 h-3" />
              Weight
            </label>
            <div className="flex gap-2 flex-wrap">
              {FONT_WEIGHTS.map(weight => (
                <button
                  key={weight.value}
                  onClick={() => onWeightChange(weight.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    selectedWeight === weight.value
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                  style={{
                    fontFamily: `"${selectedFont}", sans-serif`,
                    fontWeight: weight.value,
                    fontStyle: selectedStyle,
                  }}
                >
                  {weight.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Style */}
          <div>
            <label className="text-xs text-slate-600 dark:text-slate-400 mb-2 block flex items-center gap-1">
              <Italic className="w-3 h-3" />
              Style
            </label>
            <div className="flex gap-2">
              {FONT_STYLES.map(style => (
                <button
                  key={style.value}
                  onClick={() => onStyleChange(style.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    selectedStyle === style.value
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                  style={{
                    fontFamily: `"${selectedFont}", sans-serif`,
                    fontWeight: selectedWeight,
                    fontStyle: style.value,
                  }}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Font List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2 min-h-0">
        {filteredFonts.map((font) => {
          const isSelected = selectedFont === font.family;
          return (
            <button
              key={font.family}
              onClick={() => handleFontSelect(font)}
              className={`w-full p-3 rounded-lg border text-left transition-all hover:shadow-sm ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
              style={{
                fontFamily: `"${font.family}", ${font.category}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{font.name}</span>
                    <span className="text-xs text-slate-500 capitalize">{font.category}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: `"${font.family}", ${font.category}` }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                {isSelected && (
                  <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {filteredFonts.length === 0 && (
        <div className="text-center py-8 text-slate-500 text-sm">
          No fonts found matching your search.
        </div>
      )}
    </div>
  );
};

