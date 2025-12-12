import { Zap, Shield, CreditCard } from 'lucide-react';
import type { CSSVariables } from '@/types/theme';
import { ExampleSections } from './ExampleSections';

interface PreviewPanelProps {
  cssVariables: CSSVariables;
  selectedFont: string;
  selectedWeight: number;
  selectedStyle: string;
}

export const PreviewPanel = ({ cssVariables, selectedFont, selectedWeight, selectedStyle }: PreviewPanelProps) => {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance out of the box." },
    { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade security features included." },
    { icon: CreditCard, title: "Simple Pricing", desc: "No hidden fees. Pay as you grow." }
  ];

  const fontStyle = {
    fontFamily: `"${selectedFont}", sans-serif`,
    fontWeight: selectedWeight,
    fontStyle: selectedStyle,
  };

  return (
    <div className="space-y-4" style={fontStyle}>
      {/* Main Hero Preview Card */}
      <div 
        className="border border-[color:var(--border)] rounded-xl overflow-hidden shadow-2xl transition-colors duration-500 min-h-[600px] flex flex-col"
        style={{
          ...cssVariables,
          backgroundColor: `hsl(${cssVariables['--background']})`,
          color: `hsl(${cssVariables['--foreground']})`,
          borderColor: `hsl(${cssVariables['--border']})`,
          ...fontStyle,
        }}
      >
      {/* Mock Navigation */}
      <nav className="border-b border-[color:var(--border)] p-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Acme Inc.</div>
        <div className="flex items-center gap-6 text-sm font-medium opacity-80">
          <span className="cursor-pointer hover:opacity-100">Product</span>
          <span className="cursor-pointer hover:opacity-100">Features</span>
          <span className="cursor-pointer hover:opacity-100">Pricing</span>
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium transition-transform active:scale-95"
            style={{
              backgroundColor: `hsl(${cssVariables['--primary']})`,
              color: `hsl(${cssVariables['--primary-foreground']})`,
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Mock Hero */}
      <div className="flex-1 p-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
        <div 
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border border-[color:var(--border)]"
          style={{
            backgroundColor: `hsl(${cssVariables['--secondary']})`,
            color: `hsl(${cssVariables['--secondary-foreground']})`,
          }}
        >
          <span className="flex h-2 w-2 rounded-full mr-2 bg-green-500 animate-pulse"></span>
          v2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Build your next idea <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--primary)] to-purple-500" style={{ backgroundImage: `linear-gradient(to right, hsl(${cssVariables['--primary']}), hsl(${cssVariables['--primary']}) )` }}>
            faster than ever.
          </span>
        </h1>
        
        <p className="text-lg opacity-70 max-w-lg mx-auto leading-relaxed">
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
        </p>

        <div className="flex gap-4">
          <button 
            className="px-8 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: `hsl(${cssVariables['--primary']})`,
              color: `hsl(${cssVariables['--primary-foreground']})`,
            }}
          >
            Start Building
          </button>
          <button 
            className="px-8 py-3 rounded-lg text-base font-semibold border transition-all hover:bg-black/5 dark:hover:bg-white/5"
            style={{
              borderColor: `hsl(${cssVariables['--border']})`,
              backgroundColor: `hsl(${cssVariables['--background']})`,
              color: `hsl(${cssVariables['--foreground']})`,
            }}
          >
            Documentation
          </button>
        </div>
      </div>

      {/* Mock Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-8 border-t border-[color:var(--border)] bg-[color:var(--muted)]/20">
        {features.map((feature, i) => (
          <div 
            key={i}
            className="p-6 rounded-xl border border-[color:var(--border)] shadow-sm hover:shadow-md transition-all"
            style={{ backgroundColor: `hsl(${cssVariables['--background']})` }}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: `hsl(${cssVariables['--secondary']})`,
                color: `hsl(${cssVariables['--secondary-foreground']})`
              }}
            >
              <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-70">{feature.desc}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Example Sections - Additional Components */}
      <ExampleSections 
        cssVariables={cssVariables} 
        selectedFont={selectedFont}
        selectedWeight={selectedWeight}
        selectedStyle={selectedStyle}
      />
    </div>
  );
};

