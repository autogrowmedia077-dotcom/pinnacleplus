import React from 'react';
import { Users } from 'lucide-react';

export const OnboardingMeter: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-xl p-4 border border-indigo-500/30 flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto shadow-lg">
      <div className="bg-indigo-600/20 p-3 rounded-full">
        <Users className="text-indigo-400 w-6 h-6" />
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-white text-sm font-semibold">Weekly Onboarding Slots</h4>
          <span className="text-red-400 text-xs font-bold animate-pulse">Only 4 left</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2.5 rounded-full w-[85%]"></div>
        </div>
        <p className="text-slate-500 text-xs mt-2">
          Setup & niche tuning takes time. We limit slots to ensure quality.
        </p>
      </div>
      <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors whitespace-nowrap">
        Reserve Slot
      </button>
    </div>
  );
};