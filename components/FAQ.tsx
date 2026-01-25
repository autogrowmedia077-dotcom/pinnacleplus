import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "How quickly will I start making money?", answer: "Most of our users start seeing traction within the first 7-10 days. With our monetization blueprints, you can start earning as soon as your first automated post goes viral." },
  { question: "Is this really a one-time payment? No hidden costs?", answer: "Yes, absolutely. You pay ₹399 once for the entire system, tools, and coaching. There are no recurring fees or hidden charges." },
  { question: "What if I'm not tech-savvy? Can I still do this?", answer: "100%. Our system is designed for beginners. If you can use WhatsApp, you can run this business. Plus, your personal success coach will guide you through everything." },
  { question: "Can you guarantee I'll make money?", answer: "We guarantee that if you follow our system and don't see results in 90 days, we'll refund your money plus give you ₹5,000 for your time. That's how confident we are." },
  { question: "How much time do I need to invest daily?", answer: "The automation handles 95% of the work. You only need about 15-20 minutes a day to check analytics and respond to high-value comments." },
  { question: "Will this work in my specific niche/industry?", answer: "Our system is niche-agnostic. It works for Tech, Motivation, Health, Finance, Entertainment, and 50+ other categories." },
  { question: "What if I already have a small following?", answer: "Even better! You'll skip the 'cold start' phase and likely see results much faster than completely new accounts." },
  { question: "How is this different from hiring a social media manager?", answer: "A manager costs ₹15,000/month. Our system costs ₹399 once and works 24/7 without taking holidays or making mistakes." }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 px-4 sm:px-0 text-white">
            Your Questions <span className="text-gradient">Answered</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-4 px-4 sm:px-0">
            Real questions from real users who are now earning ₹1+ lakh monthly
          </p>
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-blue-400 font-semibold">Still have questions? Get instant answers on WhatsApp</span>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-white/5 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
              <button 
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base pr-4 text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 text-slate-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};