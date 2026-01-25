import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export const ConsistencyCalculator: React.FC = () => {
  const [postsPerWeek, setPostsPerWeek] = useState<number>(3);

  const getFeedback = (val: number) => {
    if (val <= 3) return {
      score: "Low",
      color: "text-red-500",
      bg: "bg-red-500/10",
      borderColor: "border-red-500/30",
      friction: "High Friction",
      msg: "Algorithm ignores sporadic posting.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    };
    if (val <= 9) return {
      score: "Average",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      friction: "Medium Friction",
      msg: "Growth is possible but slow.",
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />
    };
    return {
      score: "Optimal",
      color: "text-green-500",
      bg: "bg-green-500/10",
      borderColor: "border-green-500/30",
      friction: "Zero Friction",
      msg: "You are in the top 1% of creators.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
    };
  };

  const feedback = getFeedback(postsPerWeek);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Consistency Gap Calculator</h3>
      
      <div className="mb-8">
        <label className="block text-slate-300 mb-2 font-medium">
          Aap week mein kitne videos post karte ho?
        </label>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>0 posts</span>
          <span>14 posts (in 2 accounts)</span>
        </div>
        <input
          type="range"
          min="0"
          max="14"
          step="1"
          value={postsPerWeek}
          onChange={(e) => setPostsPerWeek(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="text-center mt-4 text-3xl font-bold text-white">
          {postsPerWeek} <span className="text-sm font-normal text-slate-400">posts/week</span>
        </div>
      </div>

      <div className={`p-4 rounded-xl border ${feedback.borderColor} ${feedback.bg} transition-colors duration-300`}>
        <div className="flex items-start gap-4">
          <div className="mt-1">{feedback.icon}</div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <span className="text-slate-400 text-sm">Consistency Score:</span>
              <span className={`font-bold ${feedback.color}`}>{feedback.score}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <span className="text-slate-400 text-sm">Growth Friction:</span>
              <span className={`font-bold ${feedback.color}`}>{feedback.friction}</span>
            </div>
            <p className="text-white text-sm font-medium border-t border-white/10 pt-2 mt-2">
              "{feedback.msg}"
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-indigo-400 text-sm font-semibold">
          Consistency wins. Automation removes friction.
        </p>
      </div>
    </div>
  );
};