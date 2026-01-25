import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  // Set target to end of day or fixed 22 hours from now for demo
  const [timeLeft, setTimeLeft] = useState({
    hours: 22,
    minutes: 11,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-red-500/30 bg-red-950/10">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-red-400 flex items-center justify-center gap-2">
            <span>⏰</span> ₹399 Price Expires in:
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            After this timer, price increases to ₹2,999
          </p>
          
          <div className="flex justify-center space-x-3 sm:space-x-6 mb-4">
            {[
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/80 p-3 sm:p-5 rounded-xl text-center min-w-[80px] sm:min-w-[100px] border border-white/5">
                <div className="text-2xl sm:text-4xl font-black text-white mb-1">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-sm sm:text-base text-red-400 font-semibold animate-pulse">
            Secure your spot before the price jumps 650%!
          </p>
        </div>
      </div>
    </section>
  );
};