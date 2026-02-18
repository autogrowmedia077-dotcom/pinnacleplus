import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  Play,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  Shield,
  Zap,
  Video,
  Calendar,
  ShieldCheck
} from "lucide-react";

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { ConsistencyCalculator } from "./components/ConsistencyCalculator";
import { Simulator } from "./components/Simulator";
import { NichePicker } from "./components/NichePicker";
import { OnboardingMeter } from "./components/OnboardingMeter";
import { CountdownTimer } from './components/CountdownTimer';
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsConditions } from "./components/TermsConditions";
import { ReturnsPolicy } from "./components/ReturnsPolicy";
import { AboutUs } from "./components/AboutUs";
import { FaqItem, PricingTier } from "./types";

const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "₹399",
      features: [
        "1 Niche",
        "2 Accounts Update",
        "21 YT Shorts + 1 IG Reel (Weekly)",
        "Auto-scheduling",
        "Generated Captions & Tags",
      ],
      cta: "Start Starter Plan",
      payuLink: "https://payments.cashfree.com/forms/pinnaclepluspro",
    },
    {
      name: "Pro",
      price: "₹999",
      features: [
        "2 Niches",
        "Double Volume",
        "Priority Email Support",
        "Viral Hook Library",
        "Trend Analysis",
      ],
      highlight: true,
      cta: "Get Pro Growth",
      payuLink: "https://payments.cashfree.com/forms/pinnaclepluspro",
    },
    {
      name: "Business",
      price: "₹1999",
      features: [
        "Multiple Pages",
        "Brand Style Customization",
        "Custom Hooks & CTA",
        "Dedicated Account Manager",
        "Watermark Removal",
      ],
      cta: "Scale Business",
      payuLink: "https://payments.cashfree.com/forms/pinnacleplusbusiness",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "Is it fully automated?",
      answer: "Yes. Once setup is complete, content creation and posting runs automatically.",
    },
    {
      question: "Do I need to show my face?",
      answer: "No. We create faceless content using AI visuals, stock footage, and motion graphics.",
    },
    {
      question: "What niches do you support?",
      answer: "Motivation, Love/Shayari, Tech Tips, Business/Finance, and Fitness.",
    },
    {
      question: "How long does setup take?",
      answer: "Usually 24–48 hours after onboarding.",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play fill="white" className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg">
              PinnaclePlus<span className="text-indigo-400">.Store</span>
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#how-it-works" className="hover:text-indigo-400">How it works</a>
            <a href="#pricing" className="hover:text-indigo-400">Pricing</a>
            <a href="#proof" className="hover:text-indigo-400">Examples</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-xs font-bold bg-slate-800 px-3 py-1 rounded-full text-indigo-400">
              Starter @ ₹399/mo
            </span>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold"
            >
              Get Started
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <main>
        <section className="pt-40 pb-24 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              Content banana nahi, <br />
              <span className="text-indigo-400">System banana chahiye.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Done-for-you Instagram + YouTube automation.  
              Start at just ₹399/month.
            </p>
            <OnboardingMeter />
          </div>
        </section>

        <div className="space-y-24 pb-20">
          <section className="px-4 -mt-10 relative z-20">
            <div className="max-w-4xl mx-auto">
               <Simulator />
            </div>
          </section>

          <section id="how-it-works" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <ShieldCheck />, title: "Choose Niche" },
                  { icon: <Video />, title: "We Generate Content" },
                  { icon: <CheckCircle />, title: "We Post Automatically" },
                  { icon: <Calendar />, title: "Daily Growth" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-center">
                    <div className="text-indigo-400 mb-3 flex justify-center">{item.icon}</div>
                    <h3 className="font-bold text-white text-sm md:text-base">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                   <ConsistencyCalculator />
                </div>
                <div className="order-1 md:order-2">
                   <h2 className="text-3xl font-bold text-white mb-6">The <span className="text-indigo-400">Consistency Gap</span></h2>
                   <p className="text-lg text-slate-400 mb-6">
                     Social media algorithms love predictability. If you post randomly, you get random results. 
                     Profiles posting daily grow 400% faster.
                   </p>
                   <div className="p-4 bg-indigo-900/20 border border-indigo-500/20 rounded-lg">
                     <p className="text-indigo-300 text-sm italic">
                       💡 Fact: Consistency is the only "hack" that still works in 2024.
                     </p>
                   </div>
                </div>
             </div>
          </section>

          <section id="proof" className="bg-slate-900/50 py-16 border-y border-white/5 px-4">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-white mb-4">Content Tailored For <span className="text-indigo-400">Your Niche</span></h2>
                 <p className="text-slate-400">Select your industry to see real examples of our content structures.</p>
               </div>
               <NichePicker />
            </div>
          </section>

          <Features />
          <CountdownTimer />

          <section id="pricing" className="py-24 px-4 border-t border-slate-800">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Simple Pricing. Real Automation.</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, i) => (
                  <div key={i} className={`rounded-2xl p-8 border ${tier.highlight ? "border-indigo-500 bg-slate-900 shadow-2xl scale-105" : "border-slate-800 bg-slate-900/40"}`}>
                    {tier.highlight && <div className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full w-fit mb-4 font-bold">MOST POPULAR</div>}
                    <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                    <div className="text-4xl font-extrabold mb-6 text-white">{tier.price}</div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={tier.payuLink} className={`block text-center py-3 rounded-xl font-bold transition-all ${tier.highlight ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-slate-900 hover:bg-slate-200"}`}>
                      {tier.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />

          <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-800 rounded-xl bg-slate-900/50">
                    <button onClick={() => toggleFaq(i)} className="w-full flex justify-between p-6 text-left items-center">
                      <span className="font-semibold text-white">{faq.question}</span>
                      <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {activeFaq === i && <div className="px-6 pb-6 text-slate-400 animate-fadeIn">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-20">
            <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-indigo-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
              <h2 className="text-3xl sm:text-5xl font-black mb-6 relative z-10 text-white leading-tight">Ready to Automate Your Growth?</h2>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transform transition-all hover:scale-105 mb-8 relative z-10"
              >
                🚀 Get Started for ₹399
              </button>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-slate-400 relative z-10">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>90-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Setup in 24 Hours</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans selection:bg-indigo-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
        <PurchaseNotification />
      </div>
    </Router>
  );
};

export default App;
