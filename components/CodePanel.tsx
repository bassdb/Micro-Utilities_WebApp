import { Copy, Check } from 'lucide-react';

interface CodePanelProps {
  cssContent: string;
  copied: boolean;
  onCopy: () => void;
}

export const CodePanel = ({ cssContent, copied, onCopy }: CodePanelProps) => {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-xl overflow-hidden relative group">
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={onCopy}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md backdrop-blur-md transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="font-mono text-sm text-slate-300 overflow-x-auto">
        <code>
          {cssContent}
        </code>
      </pre>
      <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
        Copy this into your <code className="text-indigo-400">globals.css</code> file.
      </div>
    </div>
  );
};

