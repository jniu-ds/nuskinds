import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { Screen } from '../types';

interface ScoreScreenProps {
  navigate: (screen: Screen) => void;
}

const StrengthBar = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => (
  <div className="mb-2">
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs text-white/90">{label}</span>
    </div>
    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-emerald-400"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

const CircularScore = ({ score }: { score: number }) => {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle
          cx="60" cy="60" r={radius}
          fill="none"
          stroke="#a78bfa"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white text-2xl font-bold">410</span>
        <span className="text-white/60 text-xs">/ 600</span>
      </div>
    </div>
  );
};

export const ScoreScreen: React.FC<ScoreScreenProps> = ({ navigate }) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto" style={{ background: '#0f0a1e' }}>
      {/* Hero image area */}
      <div
        className="relative h-52 flex items-end"
        style={{
          background: 'linear-gradient(180deg, #1a0533 0%, rgba(10,5,20,0.6) 100%)',
        }}
      >
        {/* Food image overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(255,200,50,0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(255,100,50,0.1) 0%, transparent 50%),
              linear-gradient(180deg, #1a0533 0%, #0f0a1e 100%)
            `,
          }}
        >
          {/* Decorative food emojis */}
          <div className="absolute top-6 left-8 text-4xl opacity-60">🍎</div>
          <div className="absolute top-12 right-12 text-3xl opacity-50">🥦</div>
          <div className="absolute top-4 right-6 text-2xl opacity-40">🫐</div>
          <div className="absolute top-20 left-1/2 text-3xl opacity-40">🥕</div>
          <div className="absolute top-8 left-1/3 text-2xl opacity-30">🍋</div>
          <div className="absolute top-16 right-1/3 text-2xl opacity-35">🥑</div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('home')}
          className="absolute top-10 left-4 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Score badge */}
        <div className="absolute top-8 right-4 bg-amber-400 rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
          <span className="text-gray-900 font-bold text-xl leading-none">410</span>
        </div>

        <div className="relative px-4 pb-4 w-full">
          <p className="text-white/60 text-xs">Your Prysm Score</p>
        </div>
      </div>

      {/* Dark body */}
      <div className="flex-1 px-4 py-4" style={{ background: '#0f0a1e' }}>
        {/* Score narrative */}
        <p className="text-white/80 text-xs leading-relaxed mb-4">
          Sarah, your <span className="font-bold text-white">score of 410</span> reflects a balanced lifestyle with strong habits like regular exercise, good sleep, and a diet rich in fruits and vegetables. You've built a solid foundation, but there's still room for targeted improvements to boost your antioxidant defense and overall wellness.
        </p>
        <p className="text-white/70 text-xs leading-relaxed mb-4">
          The good news is that with a few strategic improvements — such as refining your nutrition or optimizing your supplement routine — you can move into a higher performance range and further improve your Prysm score.
        </p>

        <button
          onClick={() => navigate('recommendations')}
          className="w-full bg-violet-600 text-white rounded-xl py-2.5 text-sm font-semibold mb-6"
        >
          Ways to Improve Your Score
        </button>

        {/* Circular score */}
        <CircularScore score={68} />

        <button className="w-full border border-violet-400/40 text-violet-300 rounded-xl py-2.5 text-sm font-medium mt-4 mb-6">
          Review Assessment
        </button>

        {/* Strengths */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">⭐</span>
            <h3 className="text-white font-semibold text-sm">Your Strengths</h3>
          </div>
          <StrengthBar label="Supplementation — You are already taking LifePak Nano® and ageLOC® Youth®. Keep this up. These are great foundational nutrition products." value={95} />
          <StrengthBar label="Sleep (7–9 hours) — optimal for recovery" value={88} />
          <StrengthBar label="Stress Management (2–4 days/week) — excellent management" value={80} />
          <StrengthBar label="Never smoked — no major antioxidant drain" value={100} />
          <StrengthBar label="Sun exposure (low) — minimal oxidative stress" value={90} />
        </div>

        {/* Where to focus */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🎯</span>
            <h3 className="text-white font-semibold text-sm">Where to Focus</h3>
          </div>
          {[
            { label: 'Fruit & Veg Intake (Top Priority)', detail: 'Aim for 4–5 servings daily (currently <2) to boost carotenoids' },
            { label: 'Sleep (7–9 hours)', detail: 'optimal for recovery' },
            { label: 'Nutrition Support', detail: 'Stay consistent with LifePak Nano + ageLOC Youth; consider adding some targeted solutions like Eye Formula, Collagen+ and TR90' },
            { label: 'Exercise (High Impact)', detail: 'Increase to 3–4 days/week to improve metabolism and nutrient use' },
            { label: 'BMI / Weight Balance', detail: 'Small improvements in diet + exercise will help optimize your range' },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90 text-xs font-medium">{item.label}:</span>
                <span className="text-white/60 text-xs"> {item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="h-6" />
      </div>
    </div>
  );
};
