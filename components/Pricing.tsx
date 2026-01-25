import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter Pack",
    price: "₹399",
    originalPrice: "₹2,999",
    features: [
      "300 Premium Viral Reels",
      "No Watermark",
      "Instant Download Access",
      "Lifetime Updates",
      "Basic Instagram Guide",
      "Bonuses Worth ₹5,000"
    ],
    cta: "Get Starter Pack"
  },
  {
    name: "Growth Bundle",
    price: "₹999",
    originalPrice: "₹5,999",
    features: [
      "1000+ Viral AI Reels",
      "Everything in Starter",
      "Canva Editable Files",
      "Hashtag Strategy Guide",
      "30-Day Growth Roadmap",
      "Priority Email Support",
      "Bonuses Worth ₹15,000"
    ],
    cta: "Get Growth Bundle"
  },
  {
    name: "Ultimate Empire",
    price: "₹1,999",
    originalPrice: "₹9,999",
    features: [
      "3000+ Viral Reels Library",
      "Everything in Growth",
      "Personal 1-on-1 Mentorship",
      "Monetization Mastery Course",
      "Resell Rights Included",
      "Agency Setup Kit",
      "24/7 WhatsApp Support",
      "Bonuses Worth ₹25,000"
    ],
    cta: "Get Ultimate Empire"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white">
            Choose Your <span className="text-gradient">Success Path</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
             Select the package that fits your ambition. Prices increase tonight!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-6 rounded-2xl glass-card transition-all duration-300 hover:transform hover:-translate-y-2 ${
                index === 1 
                  ? 'border-2 border-indigo-500 bg-indigo-900/10 shadow-[0_0_30px_rgba(99,102,241,0.3)] z-10 scale-105 md:scale-110' 
                  : 'border border-white/10 hover:border-indigo-500/50'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Crown size={12} fill="currentColor" /> BEST VALUE
                </div>
              )}
              
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-lg text-slate-500 line-through decoration-red-500/50">{tier.originalPrice}</span>
                </div>
                {index === 1 && (
                   <div className="mt-2 text-xs font-bold text-green-400 flex justify-center items-center gap-1">
                     <Zap size={12} fill="currentColor" /> Saving 83% Today
                   </div>
                )}
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full flex-shrink-0 ${index === 1 ? 'bg-indigo-500' : 'bg-slate-700'}`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-slate-300 leading-tight text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                index === 1 
                  ? 'gradient-primary text-white shadow-lg hover:shadow-indigo-500/50 hover:scale-105' 
                  : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
              }`}>
                {tier.cta}
              </button>
              
              <div className="mt-4 text-center">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest">Instant Access via Email</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm text-slate-400">Secure Payment (UPI/Card)</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm text-slate-400">Instant Delivery</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check size={14} className="text-green-500" /></div>
                <span className="text-sm text-slate-400">90-Day Money Back Guarantee</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};