import { AlertCircle, CheckCircle2, Info, X, Bell, Mail, User, Search, Filter, Download, Upload, Settings } from 'lucide-react';
import type { CSSVariables } from '@/types/theme';

interface ExampleSectionsProps {
  cssVariables: CSSVariables;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
}

export const ExampleSections = ({ cssVariables, selectedFont, selectedWeight, selectedStyle }: ExampleSectionsProps) => {
  const fontStyle = {
    fontFamily: `"${selectedFont}", sans-serif`,
    fontWeight: selectedWeight,
    fontStyle: selectedStyle,
  };
  const getStyle = (varName: string) => ({
    [`--${varName}`]: cssVariables[`--${varName}`],
  });
  const radiusStyle = { borderRadius: 'var(--radius)' };
  const fixedRadiusStyle = { borderRadius: '0.75rem' }; // fixed frame, like hero container
  const fixedCardRadiusStyle = { borderRadius: '0.5rem' }; // fixed medium for cards
  const shadowStyle = { boxShadow: 'var(--shadow-sm)' };

  return (
    <div className="space-y-4 mt-4" style={fontStyle}>
      {/* Buttons Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className="px-4 py-2 text-sm font-medium transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--primary']})`,
              color: `hsl(${cssVariables['--primary-foreground']})`,
            }}
          >
            Primary
          </button>
          <button
            className="px-4 py-2 text-sm font-medium border transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--secondary']})`,
              color: `hsl(${cssVariables['--secondary-foreground']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
            }}
          >
            Secondary
          </button>
          <button
            className="px-4 py-2 text-sm font-medium border transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              borderColor: `hsl(${cssVariables['--border']})`,
              backgroundColor: `hsl(${cssVariables['--background']})`,
              color: `hsl(${cssVariables['--foreground']})`,
            }}
          >
            Outline
          </button>
          <button
            className="px-4 py-2 text-sm font-medium transition-all hover:opacity-90 opacity-50"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--muted']})`,
              color: `hsl(${cssVariables['--muted-foreground'] || cssVariables['--foreground']})`,
            }}
          >
            Ghost
          </button>
        </div>
      </div>

      {/* Badges & Tags Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Badges & Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span
            className="px-2.5 py-0.5 text-xs font-medium"
            style={{
              borderRadius: '9999px',
              backgroundColor: `hsl(${cssVariables['--primary']})`,
              color: `hsl(${cssVariables['--primary-foreground']})`,
            }}
          >
            New
          </span>
          <span
            className="px-2.5 py-0.5 text-xs font-medium border"
            style={{
              borderRadius: '9999px',
              backgroundColor: `hsl(${cssVariables['--secondary']})`,
              color: `hsl(${cssVariables['--secondary-foreground']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
            }}
          >
            Featured
          </span>
          <span
            className="px-2.5 py-0.5 text-xs font-medium"
            style={{
              borderRadius: '9999px',
              backgroundColor: `hsl(${cssVariables['--muted']})`,
              color: `hsl(${cssVariables['--muted-foreground'] || cssVariables['--foreground']})`,
            }}
          >
            Default
          </span>
        </div>
      </div>

      {/* Alerts Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Alerts</h3>
        <div className="space-y-3">
          <div
            className="flex items-start gap-3 p-4 border"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--muted']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
            }}
          >
            <Info className="w-5 h-5 mt-0.5" style={{ color: `hsl(${cssVariables['--primary']})` }} />
            <div className="flex-1">
              <p className="text-sm font-medium">Info Alert</p>
              <p className="text-xs mt-1 opacity-70">This is an informational message.</p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 p-4 border"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--muted']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
            }}
          >
            <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: `hsl(${cssVariables['--primary']})` }} />
            <div className="flex-1">
              <p className="text-sm font-medium">Success Alert</p>
              <p className="text-xs mt-1 opacity-70">Operation completed successfully.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Cards</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div
            className="p-4 border transition-all hover:shadow-md"
            style={{
              ...fixedCardRadiusStyle,
              ...shadowStyle,
              backgroundColor: `hsl(${cssVariables['--background']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
            }}
          >
            <h4 className="font-semibold mb-2">Card Title</h4>
            <p className="text-sm opacity-70">Card description with some details about the content.</p>
          </div>
          <div
            className="p-4 border transition-all hover:shadow-md"
            style={{
              ...fixedCardRadiusStyle,
              ...shadowStyle,
              backgroundColor: `hsl(${cssVariables['--secondary']})`,
              borderColor: `hsl(${cssVariables['--border']})`,
              color: `hsl(${cssVariables['--secondary-foreground']})`,
            }}
          >
            <h4 className="font-semibold mb-2">Secondary Card</h4>
            <p className="text-sm opacity-80">Another card variant with secondary styling.</p>
          </div>
        </div>
      </div>

      {/* Input Fields Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Input Fields</h3>
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 border text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
              style={{
                ...radiusStyle,
                backgroundColor: `hsl(${cssVariables['--background']})`,
                borderColor: `hsl(${cssVariables['--border']})`,
                color: `hsl(${cssVariables['--foreground']})`,
                '--tw-ring-color': `hsl(${cssVariables['--primary']})`,
              } as React.CSSProperties & { '--tw-ring-color': string }}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 border text-sm focus:outline-none focus:ring-2 focus:ring-offset-0"
              style={{
                ...radiusStyle,
                backgroundColor: `hsl(${cssVariables['--background']})`,
                borderColor: `hsl(${cssVariables['--border']})`,
                color: `hsl(${cssVariables['--foreground']})`,
                '--tw-ring-color': `hsl(${cssVariables['--primary']})`,
              } as React.CSSProperties & { '--tw-ring-color': string }}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div 
        className="border p-6"
        style={{
          ...getStyle('border'),
          ...fixedRadiusStyle,
          ...shadowStyle,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
        }}
      >
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Action Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--primary']})`,
              color: `hsl(${cssVariables['--primary-foreground']})`,
            }}
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              borderColor: `hsl(${cssVariables['--border']})`,
              backgroundColor: `hsl(${cssVariables['--background']})`,
              color: `hsl(${cssVariables['--foreground']})`,
            }}
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:opacity-90"
            style={{
              ...radiusStyle,
              backgroundColor: `hsl(${cssVariables['--secondary']})`,
              color: `hsl(${cssVariables['--secondary-foreground']})`,
            }}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

