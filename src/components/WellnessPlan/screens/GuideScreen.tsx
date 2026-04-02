import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import type { Screen } from '../types';

interface GuideScreenProps {
  navigate: (screen: Screen) => void;
}

const PHASES = [
  {
    phase: 'PHASE 1',
    weeks: 'Weeks 1–4',
    label: 'Foundation Building',
    description:
      'Your existing foundation (solid sleep, no smoking, sun awareness) means your body is ready to respond. Focus on these three areas, and you should see measurable score improvement within 4–6 weeks',
    active: true,
  },
  {
    phase: 'PHASE 2',
    weeks: 'Weeks 5–8',
    label: 'Building Momentum',
    description:
      'Build on your foundation with increased exercise frequency and refined nutrition timing for optimal nutrient absorption.',
    active: false,
  },
  {
    phase: 'PHASE 3',
    weeks: 'Weeks 9–12',
    label: 'Optimization & Results',
    description:
      'Fine-tune your routine and measure results. Track improvements in energy, sleep quality, and overall wellness metrics.',
    active: false,
  },
];

const DOT_WEEKS = [
  { label: 'Weeks 1–4', active: true, pos: 0 },
  { label: 'Weeks 5–8', active: false, pos: 1 },
  { label: 'Weeks 9–12', active: false, pos: 2 },
];

export const GuideScreen: React.FC<GuideScreenProps> = ({ navigate }) => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div
      className="h-full flex flex-col overflow-y-auto"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-10 pb-4">
        <button onClick={() => navigate('home')} className="p-1">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5">
          <RotateCcw className="w-3 h-3 text-white/70" />
          <span className="text-white/70 text-xs">Restart 90 Day Guide</span>
        </button>
      </div>

      {/* Title */}
      <div className="px-4 mb-6">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Your</p>
        <h1 className="text-white text-3xl font-bold leading-none">
          90 DAY
          <br />
          <span className="text-white/80">Guide</span>
        </h1>
        <p className="text-white/50 text-xs mt-2">Started 02 Jun 2026</p>
      </div>

      {/* Progress dots */}
      <div className="px-4 mb-8">
        <div className="flex items-center relative">
          {/* Line */}
          <div className="absolute top-3 left-4 right-4 h-0.5 bg-white/10" />
          <div className="absolute top-3 left-4 h-0.5 bg-violet-500" style={{ width: 'calc(33.33% - 8px)' }} />

          {DOT_WEEKS.map((dot, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative z-10">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  dot.active
                    ? 'border-violet-500 bg-violet-500'
                    : 'border-white/20 bg-transparent'
                }`}
              >
                {dot.active && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <span className="text-white/50 text-[9px] mt-1.5 text-center">{dot.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Phases */}
      <div className="px-4 space-y-3">
        {PHASES.map((phase, i) => (
          <button
            key={i}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`w-full text-left rounded-2xl px-4 py-4 transition-all ${
              phase.active
                ? 'bg-white/10 border border-violet-500/40'
                : 'bg-white/5 border border-white/5'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">
                  {phase.phase} · {phase.weeks}
                </p>
                <p className="text-white font-semibold text-sm mt-0.5">{phase.label}</p>
              </div>
              <ChevronRight
                className={`w-4 h-4 text-white/40 transition-transform ${expanded === i ? 'rotate-90' : ''}`}
              />
            </div>

            {expanded === i && (
              <p className="text-white/60 text-xs leading-relaxed mt-3 border-t border-white/10 pt-3">
                {phase.description}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="px-4 mt-6 pb-8">
        <p className="text-white/50 text-xs leading-relaxed">
          Your existing foundation (solid sleep, no smoking, sun awareness) means your body is ready to respond. Focus on these three areas, and you should see measurable score improvement within 4–6 weeks
        </p>
      </div>

      {/* Challenge link */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate('challenge')}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
        >
          <span>Start Your 15 Day Challenge</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
