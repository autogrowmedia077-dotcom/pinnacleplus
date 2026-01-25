import React, { useState } from 'react';
import { NicheData } from '../types';
import { Lightbulb, Hash, MessageSquare } from 'lucide-react';

const niches: NicheData[] = [
  {
    id: 'motivation',
    label: 'Motivation',
    ideas: ['Wake up 5AM routine', 'Overcoming failure story', 'Discipline vs Motivation'],
    hooks: ['"Stop wasting your 20s..."', '"This quote changed my life..."', '"Why you are still poor..."'],
    captions: ['Double tap if you agree! 🔥', 'Tag a friend who needs this.', 'Save this for later. 📌']
  },
  {
    id: 'love',
    label: 'Love/Shayari',
    ideas: ['Heartbreak poetry', 'Tag your soulmate', 'Relationship advice'],
    hooks: ['"Woh jo humse baat nahi karte..."', '"Sacchi mohabbat kya hai?"', '"Never ignore these signs..."'],
    captions: ['Comment a "❤️" below.', 'Share with your love.', 'True story... 🥀']
  },
  {
    id: 'tech',
    label: 'Tech/AI',
    ideas: ['Top 3 AI tools', 'Hidden iPhone feature', 'ChatGPT hacks'],
    hooks: ['"Stop using ChatGPT like this!"', '"This website is illegal to know..."', '"iPhone users, watch this!"'],
    captions: ['Link in bio! 🔗', 'Follow for more tech tips.', 'Try this today! 🚀']
  },
  {
    id: 'business',
    label: 'Business',
    ideas: ['Sales psychology trick', 'How I made ₹1L', 'Marketing case study'],
    hooks: ['"Sell me this pen..."', '"The psychology of pricing..."', '"Why Zomato is winning..."'],
    captions: ['Business mindset 101. 💼', 'Follow @AutoReel for more.', 'Save for your startup.']
  },
  {
    id: 'fitness',
    label: 'Fitness/Gym',
    ideas: ['3 exercises for abs', 'Weight loss myth', 'Protein diet hack'],
    hooks: ['"Stop doing crunches!"', '"Eat this to lose fat..."', '"Why your gym routine fails..."'],
    captions: ['No pain no gain. 💪', 'Save for your next workout.', 'Tag your gym buddy.']
  }
];

export const NichePicker: React.FC = () => {
  const [selected, setSelected] = useState<NicheData>(niches[0]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {niches.map((n) => (
          <button
            key={n.id}
            onClick={() => setSelected(n)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected.id === n.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Ideas Card */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 mb-4 text-indigo-400">
            <Lightbulb size={20} />
            <h4 className="font-bold">Video Ideas</h4>
          </div>
          <ul className="space-y-3">
            {selected.ideas.map((idea, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <span className="text-indigo-500 font-bold">•</span> {idea}
              </li>
            ))}
          </ul>
        </div>

        {/* Hooks Card */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 mb-4 text-pink-400">
            <Hash size={20} />
            <h4 className="font-bold">Viral Hooks</h4>
          </div>
          <ul className="space-y-3">
            {selected.hooks.map((hook, i) => (
              <li key={i} className="text-slate-300 text-sm italic">
                {hook}
              </li>
            ))}
          </ul>
        </div>

        {/* Captions Card */}
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <MessageSquare size={20} />
            <h4 className="font-bold">Captions</h4>
          </div>
          <ul className="space-y-3">
            {selected.captions.map((cap, i) => (
              <li key={i} className="text-slate-300 text-sm bg-slate-900/50 p-2 rounded">
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <p className="text-center text-slate-500 mt-6 text-sm">
        *Samples of what we generate for our 5 core niches.*
      </p>
    </div>
  );
};