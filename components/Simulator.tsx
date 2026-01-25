import React, { useState, useEffect } from 'react';
import { RefreshCw, Zap } from 'lucide-react';

export const Simulator: React.FC = () => {
  const [isAutomated, setIsAutomated] = useState(false);
  const [days, setDays] = useState<string[]>(Array(7).fill("empty"));

  // Simulation logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutomated) {
      // Fill nicely one by one
      let counter = 0;
      setDays(Array(7).fill("empty"));
      interval = setInterval(() => {
        setDays(prev => {
          const newDays = [...prev];
          if (counter < 7) {
            newDays[counter] = "posted";
            counter++;
          }
          return newDays;
        });
      }, 300);
    } else {
      // Random sporadic filling
      setDays(["empty", "empty", "posted", "empty", "empty", "posted", "empty"]);
    }

    return () => clearInterval(interval);
  }, [isAutomated]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-900 rounded-2xl border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <span className="text-indigo-400">1-Reel/Day</span> Simulator
        </h3>
        <button
          onClick={() => setIsAutomated(!isAutomated)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
            isAutomated ? 'bg-indigo-600' : 'bg-slate-600'
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              isAutomated ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="mb-4 text-center">
        {isAutomated ? (
          <span className="text-green-400 text-sm font-bold flex items-center justify-center gap-2">
            <Zap size={16} /> Autopilot ON: Daily Posting
          </span>
        ) : (
          <span className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            <RefreshCw size={16} /> Manual Mode: Random Posting
          </span>
        )}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={i} className="text-center">
            <div className="text-xs text-slate-500 mb-1">{day}</div>
            <div 
              className={`h-16 w-full rounded-md transition-all duration-500 relative overflow-hidden ${
                days[i] === "posted" 
                  ? (isAutomated ? "bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" : "bg-slate-700") 
                  : "bg-slate-800"
              }`}
            >
              {days[i] === "posted" && (
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-6 h-8 bg-white/20 rounded-sm animate-pulse"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-slate-500 mt-4">
        {isAutomated ? "Full green grid = Algorithm love ❤️" : "Gaps in posting = Reach kill 💀"}
      </p>
    </div>
  );
};