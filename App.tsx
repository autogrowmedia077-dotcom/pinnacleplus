import React, { useState } from "react";
import {
  Play,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Calendar,
  Video,
  BarChart3,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { ConsistencyCalculator } from "./components/ConsistencyCalculator";
import { Simulator } from "./components/Simulator";
import { NichePicker } from "./components/NichePicker";
import { OnboardingMeter } from "./components/OnboardingMeter";
import { FaqItem, PricingTier } from "./types";

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  /* ================= PRICING DATA ================= */
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
      payuLink: "https://u.payu.in/BrUiQYLkFlAq",
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
      payuLink: "https://u.payu.in/HJh89xerzBHD",
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
      payuLink: "https://u.payu.in/HJh89xerzBHD",
    },
  ];

  /* ================= FAQ DATA ================= */
  const faqs: FaqItem[] = [
    {
      question: "Is it fully automated?",
      answer:
        "Yes. Once setup is complete, content creation and posting runs automatically.",
    },
    {
      question: "Do I need to show my face?",
      answer:
        "No. We create faceless content using AI visuals, stock footage, and motion graphics.",
    },
    {
      question: "What niches do you support?",
      answer:
        "Motivation, Love/Shayari, Tech Tips, Business/Finance, and Fitness.",
    },
    {
      question: "How long does setup take?",
      answer: "Usually 24–48 hours after onboarding.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans">

      {/* ================= TOP BAR ================= */}
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
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold">
              Get Started
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="pt-40 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple Pricing. Real Automation.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border ${
                  tier.highlight
                    ? "border-indigo-500 bg-slate-900 shadow-xl scale-105"
                    : "border-slate-800 bg-slate-900/40"
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full w-fit mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-extrabold mb-6">{tier.price}</div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.payuLink}
                  className={`block text-center py-3 rounded-xl font-bold ${
                    tier.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-white text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} PinnaclePlus.Store
      </footer>
    </div>
  );
};

export default App;
