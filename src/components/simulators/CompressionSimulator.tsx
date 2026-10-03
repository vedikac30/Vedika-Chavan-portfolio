import React, { useState } from 'react';

type MediaFormat = 'Image (PNG/JPG)' | 'Video (MP4)' | 'Audio (MP3)' | 'Document (PDF)';

export default function CompressionSimulator() {
  const [selectedFormat, setSelectedFormat] = useState<MediaFormat>("Image (PNG/JPG)");
  const [compressionLevel, setCompressionLevel] = useState<number>(65);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const initialSizes: Record<MediaFormat, number> = {
    "Image (PNG/JPG)": 4.8,
    "Video (MP4)": 45.2,
    "Audio (MP3)": 12.0,
    "Document (PDF)": 8.5
  };

  const originalSize = initialSizes[selectedFormat];
  const savingsPercent = Math.round(compressionLevel * 0.85);
  const compressedSize = (originalSize * (1 - savingsPercent / 100)).toFixed(2);

  const triggerCompress = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-2xl border border-indigo-500/20 backdrop-blur-md">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Enhancio Android Engine</span>
        <span className="text-xs font-mono text-cyan-400">Kotlin Native Logic</span>
      </div>

      <div className="mt-4">
        <label className="text-xs text-slate-400 font-medium block mb-1">Target Media Format:</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["Image (PNG/JPG)", "Video (MP4)", "Audio (MP3)", "Document (PDF)"] as MediaFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`p-1.5 text-xs rounded-lg border text-center transition-all ${
                selectedFormat === fmt
                  ? "bg-indigo-600/30 border-indigo-500 text-indigo-200 font-semibold"
                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              {fmt.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-slate-400">Compression Aggression:</span>
          <span className="text-indigo-400 font-mono font-bold">{compressionLevel}%</span>
        </div>
        <input 
          type="range" 
          min="20" 
          max="90" 
          value={compressionLevel}
          onChange={(e) => setCompressionLevel(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-center">
        <div>
          <p className="text-[11px] text-slate-400">Original File</p>
          <p className="text-base font-bold text-rose-400">{originalSize} MB</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-400">Compressed Output</p>
          <p className="text-base font-bold text-emerald-400">
            {isProcessing ? "Optimizing..." : `${compressedSize} MB`}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-emerald-400 font-mono">
          Saved ~{savingsPercent}% disk space
        </span>
        <button
          onClick={triggerCompress}
          disabled={isProcessing}
          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all active:scale-95 disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Run Test Compression"}
        </button>
      </div>
    </div>
  );
}
