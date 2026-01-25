import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Ex-Software Engineer',
    location: 'Mumbai',
    revenue: '₹2.3L/month',
    timeframe: 'in 4 months',
    quote: "I was skeptical at first, but this system helped me quit my ₹8L/year job. Now I'm making ₹2.3 lakh per month with automated content across 5 platforms. The ROI? Over 4000% in 4 months.",
    initials: 'RK'
  },
  {
    id: '2',
    name: 'Sneha Patel',
    role: 'College Student',
    location: 'Ahmedabad',
    revenue: '₹85K/month',
    timeframe: 'in 2 months',
    quote: "As a student, I didn't have much time. PinnaclePlus automated everything. I just set it up once, and now it generates passive income while I focus on my studies. Best investment ever.",
    initials: 'SP'
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Small Business Owner',
    location: 'Delhi',
    revenue: '₹1.5L/month',
    timeframe: 'in 3 months',
    quote: "My traditional business was struggling. This automation tool helped me pivot to digital products. The traffic from the automated reels is insane. Highly recommended!",
    initials: 'AV'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'Housewife',
    location: 'Bangalore',
    revenue: '₹45K/month',
    timeframe: 'in 1 month',
    quote: "I wanted to contribute to my family income from home. This was the perfect solution. Technical support guided me through every step. Now I earn more than my husband!",
    initials: 'PS'
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 px-4 sm:px-0 text-white">
            Real Results From <span className="text-gradient">Real People</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 mb-4 px-4 sm:px-0">
            5,000+ entrepreneurs earning ₹1+ lakh monthly with our system
          </p>
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-semibold">All results independently verified</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-green-500/20 relative">
            
            {/* User Info Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-xl">{testimonials[activeIndex].initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-slate-400">{testimonials[activeIndex].role} • {testimonials[activeIndex].location}</p>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto bg-green-900/10 p-2 rounded-lg sm:bg-transparent sm:p-0">
                <div className="text-2xl font-bold text-green-400">{testimonials[activeIndex].revenue}</div>
                <div className="text-xs text-green-500/70">{testimonials[activeIndex].timeframe}</div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center mb-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-slate-500 font-medium">Verified Purchase</span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6 italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="pt-4 border-t border-white/10 flex items-center text-sm text-green-400 font-semibold">
              <span className="mr-2">✓</span> Results verified by PinnaclePlus team
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-indigo-500 w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="text-center mt-2 text-xs text-slate-600">
            {activeIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
};