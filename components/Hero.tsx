import React from 'react';
import { Zap, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-float">
          <Zap className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold text-yellow-400">87% OFF - LIMITED TIME ONLY</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8 text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>5,000+ Active Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>98% Success Rate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>₹50L+ Revenue Generated</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
          Turn Your Social Media Into a<br className="hidden sm:block" />
          <span className="block sm:inline mt-2">
            <span className="text-gradient">₹1 Lakh+/Month</span> Business
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-8 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
          The exact automation system that helped 5,000+ entrepreneurs build profitable online businesses. 
          Complete setup in 24 hours, results guaranteed in 90 days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="text-center">
            <div className="text-xl sm:text-2xl text-slate-500 line-through decoration-red-500/50">₹2,999</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">Regular Price</div>
          </div>
          
          <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 rotate-90 sm:rotate-0" />
          
          <div className="text-center glass-card p-4 sm:p-6 rounded-xl glow-primary bg-slate-900/50">
            <div className="text-4xl sm:text-5xl font-black text-gradient">₹399</div>
            <div className="text-sm text-green-400 font-bold tracking-wide">87% OFF TODAY</div>
          </div>
        </div>

        <div className="space-y-6">
          <button 
            onClick={scrollToPricing}
            className="w-full sm:w-auto gradient-primary text-white px-8 sm:px-12 py-4 rounded-lg text-lg sm:text-xl font-bold hover-glow transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
          >
            💰 Get ₹399 Package Now!
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>90-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Setup Complete in 24 Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Personal Success Coach Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};