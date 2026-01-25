import React from 'react';
import { Bot, Target, TrendingUp, Headphones, DollarSign, Instagram, ShieldCheck, Layers, Rocket } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'auto-content',
    title: 'Automated Content Creation',
    description: 'AI-powered daily content generation and posting across all your social media platforms. Never run out of engaging content again.',
    icon: <Bot className="w-6 h-6 text-white" />
  },
  {
    id: 'multi-niche',
    title: 'Multi-Niche Optimization',
    description: 'Advanced targeting system that optimizes your content for multiple niches, maximizing reach and engagement rates.',
    icon: <Target className="w-6 h-6 text-white" />
  },
  {
    id: 'analytics',
    title: 'Real-time Analytics',
    description: 'Comprehensive growth tracking with detailed insights, performance metrics, and optimization recommendations.',
    icon: <TrendingUp className="w-6 h-6 text-white" />
  },
  {
    id: 'support',
    title: '24/7 Technical Support',
    description: 'Priority support from our expert team. Get help whenever you need it with our round-the-clock assistance.',
    icon: <Headphones className="w-6 h-6 text-white" />
  },
  {
    id: 'monetization',
    title: 'Monetization Guidance',
    description: 'Step-by-step strategies to monetize your automated content and turn your digital presence into multiple revenue streams.',
    icon: <DollarSign className="w-6 h-6 text-white" />
  },
  {
    id: 'social-growth',
    title: 'Instagram & YouTube Automation',
    description: 'Specialized automation tools for Instagram and YouTube growth, including hashtag optimization and video scheduling.',
    icon: <Instagram className="w-6 h-6 text-white" />
  },
  {
    id: 'guarantee',
    title: '90-Day Growth Guarantee',
    description: 'We guarantee measurable growth within 90 days or your money back. Risk-free investment in your digital future.',
    icon: <ShieldCheck className="w-6 h-6 text-white" />
  },
  {
    id: 'revenue',
    title: 'Multiple Revenue Streams',
    description: 'Learn how to set up and manage multiple income sources from your automated content creation system.',
    icon: <Layers className="w-6 h-6 text-white" />
  },
  {
    id: 'access',
    title: 'Instant Access',
    description: 'Get immediate access to all tools and resources after purchase. Start automating your growth today, not tomorrow.',
    icon: <Rocket className="w-6 h-6 text-white" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 px-4 sm:px-0 text-white">
            The Complete <span className="text-gradient">Business-in-a-Box</span> Solution
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto px-4 sm:px-0">
            Everything successful entrepreneurs use to build ₹1+ lakh monthly businesses. 
            No guesswork, no trial and error – just the proven system that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="glass-card p-6 sm:p-8 rounded-xl hover-glow transition-all duration-300 group">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};