import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Zap, 
  TrendingUp, 
  Calendar, 
  Video, 
  BarChart3, 
  ShieldCheck,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { ConsistencyCalculator } from './components/ConsistencyCalculator';
import { Simulator } from './components/Simulator';
import { NichePicker } from './components/NichePicker';
import { OnboardingMeter } from './components/OnboardingMeter';
import { FaqItem, PricingTier } from './types';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "₹399",
      features: ["1 Niche", "2 Accounts Update", "21 YT Shorts + 1 IG Reel (Weekly)", "Auto-scheduling", "Generated Captions & Tags"],
      cta: "Start Starter Plan"
    },
    {
      name: "Pro",
      price: "₹999",
      features: ["2 Niches", "Double Volume", "Priority Email Support", "Viral Hook Library", "Trend Analysis"],
      highlight: true,
      cta: "Get Pro Growth"
    },
    {
      name: "Business",
      price: "₹1999",
      features: ["Multiple Pages", "Brand Style Customization", "Custom Hooks & CTA", "Dedicated Account Manager", "Watermark Removal"],
      cta: "Scale Business"
    }
  ];

  const faqs: FaqItem[] = [
    { question: "Is it fully automated?", answer: "Yes! Once you complete the setup and choose your niche, we handle the creation and posting. We update 2 accounts for you automatically." },
    { question: "Do I need to show my face?", answer: "No. Our AI generates faceless videos (stock footage, AI avatars, text animations, or motion graphics) based on your chosen niche." },
    { question: "What niches do you support?", answer: "We specialize in 5 profitable niches: Motivation, Love/Shayari, Tech Tips, Business/Finance, and Fitness." },
    { question: "How do you keep content unique?", answer: "We use AI to combine different visual assets, scripts, and music. No two reels are exactly the same." },
    { question: "How long does setup take?", answer: "Usually 24-48 hours. Once setup is complete, your content engine starts running immediately." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans">
      
      {/* Sticky Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play fill="white" className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">PinnaclePlus<span className="text-indigo-400">.Store</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#proof" className="hover:text-indigo-400 transition-colors">Examples</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-bold bg-slate-800 px-3 py-1 rounded-full text-indigo-400 border border-indigo-500/20">
              Starter @ ₹399/mo
            </span>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
              Get Started
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-20 px-6">
           <div className="flex flex-col gap-6 text-xl font-bold">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#proof" onClick={() => setMobileMenuOpen(false)}>Examples</a>
            <button className="bg-indigo-600 w-full py-3 rounded-xl mt-4">Start Setup</button>
           </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-indigo-300">Setup in 24-48 hrs • Limited Slots</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Content banana nahi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              System banana chahiye.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Done-for-you Instagram + YouTube automation. <br className="hidden md:block"/>
            We manage 2 accounts. <strong className="text-slate-200">Start your engine at just ₹399/mo.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2">
              Start Channel Setup <ChevronDown className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-slate-800/50 text-white border border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all">
              See How It Works
            </button>
          </div>

          <OnboardingMeter />
        </div>
      </section>

      {/* Split World: Manual vs Auto */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Manual Creator <span className="text-slate-600">vs</span> Automated Creator</h2>
            <p className="text-slate-400">Problem talent nahi — system ki kami hai.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
            {/* The Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

            {/* Left: Pain */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-red-950/30 to-slate-900 border border-red-900/20 md:border-none md:bg-transparent">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="text-red-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-red-200">Manual Mode</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Time nahi milta (Job/Business)",
                  "Editing headache (CapCut crash)",
                  "Post miss = Reach drop 📉",
                  "Ideas khatam after 2 weeks",
                  "Inconsistent growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 opacity-50 grayscale pointer-events-none select-none">
                 {/* Visual representation of chaos */}
                 <div className="h-32 bg-slate-800/50 rounded-lg flex items-center justify-center border border-dashed border-slate-700">
                    <span className="text-xs text-slate-600">Drafts Folder (142 files)</span>
                 </div>
              </div>
            </div>

            {/* Right: Pleasure */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-950/30 to-slate-900 border border-indigo-900/20 md:border-none md:bg-transparent">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-indigo-400 w-8 h-8" />
                <h3 className="text-2xl font-bold text-indigo-200">Automation Mode</h3>
              </div>
               <ul className="space-y-4">
                {[
                  "2 Accounts Update (IG + YT)",
                  "Zero editing required",
                  "Daily momentum = Algorithm love 🚀",
                  "5 Profitable Niches",
                  "You focus on Business/Job"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Simulator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive: Consistency Calculator */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why your channel isn't growing?
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Social media algorithms only care about one thing: <strong>Consistency.</strong>
                <br /><br />
                Use the calculator to see where you stand.
              </p>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <TrendingUp className="text-indigo-400" /> The Growth Formula
                </h4>
                <p className="text-sm text-slate-400">
                  Consistency + Volume = Viral Luck.<br/>
                  If you post 2x/day, you buy 60 "lottery tickets" a month. <br/>
                  If you post 2x/week, you only buy 8.
                </p>
              </div>
            </div>
            <div>
              <ConsistencyCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400">Automation turns content into a routine, not a mood.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck />, title: "1. Choose Niche", desc: "Select from our 5 profitable niches." },
              { icon: <Video />, title: "2. Content Generation", desc: "We generate high-quality variations." },
              { icon: <CheckCircle />, title: "3. Direct Setup", desc: "We handle the posting and scheduling." },
              { icon: <Calendar />, title: "4. Auto-Post", desc: "Content goes live on IG & YT automatically." }
            ].map((step, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl relative hover:border-indigo-500/50 transition-colors group">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 border border-slate-700 group-hover:text-indigo-400 group-hover:border-indigo-500 transition-all">
                  {i + 1}
                </div>
                <div className="mb-4 text-indigo-400">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Picker / Objection Crusher */}
      <section id="proof" className="py-20 bg-slate-900 border-y border-slate-800 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">"But I don't know what to post..."</h2>
            <p className="text-slate-400">Select a niche below to see what our engine generates instantly.</p>
          </div>
          <NichePicker />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            
            {/* The Highlight Quote */}
            <div className="inline-block bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-full px-6 py-2 mb-8">
              <p className="text-yellow-200 font-bold text-lg md:text-xl">
                "Cheaper than a pizza, more ROI than a degree."
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing. No Hidden Fees.</h2>
            <p className="text-slate-400">Direct Setup. 2 Accounts Management.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {pricingTiers.map((tier, i) => (
              <div 
                key={i} 
                className={`relative rounded-2xl p-8 border ${
                  tier.highlight 
                    ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                    : 'bg-slate-900/30 border-slate-800'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-indigo-400' : 'text-slate-500'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                  tier.highlight 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-white hover:bg-slate-200 text-slate-900'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-950/20 to-slate-900 border border-red-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Cost of Waiting 30 Days...</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-red-200">
                  <Clock className="text-red-500" /> 0 new followers
                </li>
                <li className="flex items-center gap-3 text-red-200">
                  <TrendingUp className="text-red-500 rotate-180" /> Algorithm forgets you
                </li>
                <li className="flex items-center gap-3 text-red-200">
                  <BarChart3 className="text-red-500" /> Competitors post 60 times
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
               <h3 className="text-2xl font-bold text-white mb-4">Market wait nahi karta.</h3>
               <p className="text-slate-400 mb-6">
                 Consistency wins. Start your machine today for less than ₹15/day.
               </p>
               <button className="bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                 Start Now @ ₹399
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 text-slate-400 transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-indigo-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Stop planning. Start publishing.
          </h2>
          <p className="text-xl text-indigo-200 mb-10">
            Your content engine starts at <span className="font-bold text-white">₹399/month</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-white text-indigo-900 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl shadow-white/10 hover:scale-105 transition-transform">
               Start Setup Now
             </button>
             <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors">
               Choose Plan
             </button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Limited slots available due to manual setup requirements.
          </p>
        </div>
      </section>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} PinnaclePlus.Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;