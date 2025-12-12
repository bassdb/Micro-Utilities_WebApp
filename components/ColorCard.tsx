import { useState, useRef, useEffect } from 'react';

interface ColorCardProps {
  label: string;
  colorKey: string;
  hexValue: string;
  onChange: (key: string, value: string) => void;
}

const isValidHex = (hex: string): boolean => {
  // Entferne # falls vorhanden
  const cleanHex = hex.replace('#', '');
  // Prüfe auf 3 oder 6 hexadezimale Zeichen
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleanHex);
};

const normalizeHex = (hex: string): string => {
  // Entferne Leerzeichen und # falls vorhanden
  let cleanHex = hex.trim().replace(/#/g, '');
  
  // Wenn 3 Zeichen, expandiere zu 6
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  
  // Füge # hinzu
  return '#' + cleanHex.toUpperCase();
};

export const ColorCard = ({ label, colorKey, hexValue, onChange }: ColorCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(hexValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Synchronisiere inputValue mit hexValue wenn sich hexValue von außen ändert
  useEffect(() => {
    setInputValue(hexValue);
  }, [hexValue]);

  // Fokussiere Input wenn Bearbeitungsmodus aktiviert wird
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleHexInputBlur = () => {
    setIsEditing(false);
    
    // Normalisiere und validiere den Hex-Code
    if (isValidHex(inputValue)) {
      const normalizedHex = normalizeHex(inputValue);
      if (normalizedHex !== hexValue) {
        onChange(colorKey, normalizedHex);
      }
      setInputValue(normalizedHex);
    } else {
      // Wenn ungültig, setze zurück auf den ursprünglichen Wert
      setInputValue(hexValue);
    }
  };

  const handleHexInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setInputValue(hexValue);
      setIsEditing(false);
      inputRef.current?.blur();
    }
  };

  const handleHexClick = () => {
    setIsEditing(true);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    
    // Entferne alle nicht-hexadezimalen Zeichen außer #
    const cleaned = pastedText.replace(/[^0-9A-Fa-f#]/g, '');
    
    if (isValidHex(cleaned)) {
      const normalizedHex = normalizeHex(cleaned);
      setInputValue(normalizedHex);
      onChange(colorKey, normalizedHex);
    } else {
      // Versuche es trotzdem zu normalisieren, falls es fast gültig ist
      const normalizedHex = normalizeHex(cleaned);
      if (isValidHex(normalizedHex.replace('#', ''))) {
        setInputValue(normalizedHex);
        onChange(colorKey, normalizedHex);
      }
    }
  };

  return (
    <div className="group relative flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-slate-800">
      {/* Color Display Area */}
      <div 
        className="h-24 w-full relative transition-colors duration-300"
        style={{ backgroundColor: hexValue }}
      >
        <input 
          type="color" 
          value={hexValue}
          onChange={(e) => onChange(colorKey, e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
            Click to Edit
          </div>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 flex flex-col gap-1">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
        <div className="flex items-center justify-between gap-2">
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleHexInputChange}
              onBlur={handleHexInputBlur}
              onKeyDown={handleHexInputKeyDown}
              onPaste={handlePaste}
              className="font-mono text-sm text-slate-700 dark:text-slate-200 font-medium bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:border-indigo-600 w-full max-w-[100px]"
              placeholder="#000000"
              autoFocus
            />
          ) : (
            <span 
              className="font-mono text-sm text-slate-700 dark:text-slate-200 font-medium cursor-text hover:text-indigo-600 transition-colors"
              onClick={handleHexClick}
              title="Click to edit hex code"
            >
              {hexValue}
            </span>
          )}
          <div className="h-6 w-6 rounded border border-slate-200 dark:border-slate-600 flex-shrink-0" style={{ backgroundColor: hexValue }} />
        </div>
        <span className="text-[10px] text-slate-400 font-mono truncate">
          var(--{colorKey})
        </span>
      </div>
    </div>
  );
};

