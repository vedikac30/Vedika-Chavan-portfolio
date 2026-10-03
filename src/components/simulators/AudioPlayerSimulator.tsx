import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Sparkles } from 'lucide-react';

export default function AudioPlayerSimulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [progress, setProgress] = useState(38);
  const [volume, setVolume] = useState(75);

  const playlist = [
    { title: "Midnight City Lights", artist: "Vedika's Synth Mix", duration: "3:42", genre: "Synthwave / Lo-Fi" },
    { title: "MERN Stack Groove", artist: "Fullstack Beats", duration: "2:54", genre: "Chillhop" },
    { title: "Async Pulse", artist: "Node.js Audio Lab", duration: "4:15", genre: "Ambient Electronic" }
  ];

  const currentTrack = playlist[trackIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-2xl border border-indigo-500/20 backdrop-blur-md">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Live Player Simulation</span>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">MERN Engine</span>
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-bold text-lg relative overflow-hidden group">
          <Sparkles className="w-8 h-8 text-white/80 animate-pulse" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold truncate text-white">{currentTrack.title}</h4>
          <p className="text-xs text-slate-400 truncate">{currentTrack.artist} • <span className="text-indigo-400">{currentTrack.genre}</span></p>
          <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-1 font-mono">
            <span>0:{String(Math.floor((progress / 100) * 180)).padStart(2, '0')}</span>
            <span>/</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 space-y-1">
        <div 
          className="w-full bg-slate-800 h-2 rounded-full cursor-pointer relative overflow-hidden"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newPerc = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
            setProgress(Math.round(newPerc));
          }}
        >
          <div 
            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Previous track"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-transform active:scale-95"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Next track"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-slate-400" />
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-16 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <span className="text-xs font-mono text-slate-400 w-6">{volume}%</span>
        </div>
      </div>
    </div>
  );
}
