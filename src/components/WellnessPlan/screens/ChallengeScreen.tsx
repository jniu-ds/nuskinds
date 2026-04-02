import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Screen } from '../types';

interface ChallengeScreenProps {
  navigate: (screen: Screen) => void;
}

const PHASES = [
  {
    phase: 'PHASE 1',
    days: 'Days 1–5',
    label: 'Foundation Building',
    description:
      'Your existing foundation (solid sleep, no smoking, sun awareness) means your body is ready to respond. Focus on these three areas, and you should see measurable score improvement within 4–6 weeks.',
    active: true,
  },
  {
    phase: 'PHASE 2',
    days: 'Days 6–10',
    label: 'Building Momentum',
    description:
      'Increase your daily fruit and vegetable intake, and begin your targeted supplement routine to support recovery and energy.',
    active: false,
  },
  {
    phase: 'PHASE 3',
    days: 'Days 11–15',
    label: 'Optimization & Results',
    description:
      'Assess your progress and lock in new habits. Measure how your energy, sleep quality, and focus have improved.',
    active: false,
  },
];

const DAYS = [1, 5, 10, 15];

export const ChallengeScreen: React.FC<ChallengeScreenProps> = ({ navigate }) => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [currentDay] = useState(3);

  return (
    <div
      className="h-full flex flex-col overflow-y-auto"
      style={{ background: 'linear-gradient(160deg, #c2410c 0%, #ea580c 30%, #dc2626 70%, #9f1239 100%)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-10 pb-4">
        <button onClick={() => navigate('guide')} className="p-1">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="w-8" />
      </div>

      {/* Title */}
      <div className="px-4 mb-6">
        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Your</p>
        <h1 className="text-white text-3xl font-bold leading-none">
          15 DAY
          <br />
          <span className="text-white/80">Challenge</span>
        </h1>
        <p className="text-white/60 text-xs mt-2">Started 02 Jun 2026</p>
      </div>

      {/* Day progress */}
      <div className="px-4 mb-8">
        <div className="flex items-center relative">
          {/* Background line */}
          <div className="absolute top-3 left-4 right-4 h-0.5 bg-white/20" />
          {/* Active line */}
          <div
            className="absolute top-3 left-4 h-0.5 bg-white/80"
            style={{ width: `${((currentDay - 1) / 14) * (100 - 8)}%` }}
          />

          {DAYS.map((day, i) => {
            const isPast = day <= currentDay;
            const isCurrent = day === currentDay || (i === 0 && currentDay <= 5);
            return (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isCurrent
                      ? 'border-white bg-white'
                      : isPast
                      ? 'border-white/80 bg-white/60'
                      : 'border-white/30 bg-transparent'
                  }`}
                >
                  {isCurrent && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                </div>
                <span className="text-white/70 text-[9px] mt-1.5">Day {day}</span>
              </div>
            );
          })}
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
                ? 'bg-white/20 border border-white/30'
                : 'bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">
                  {phase.phase} · {phase.days}
                </p>
                <p className="text-white font-semibold text-sm mt-0.5">{phase.label}</p>
              </div>
              <ChevronRight
                className={`w-4 h-4 text-white/50 transition-transform ${expanded === i ? 'rotate-90' : ''}`}
              />
            </div>

            {expanded === i && (
              <p className="text-white/70 text-xs leading-relaxed mt-3 border-t border-white/20 pt-3">
                {phase.description}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Bottom description */}
      <div className="px-4 mt-6 pb-8">
        <p className="text-white/60 text-xs leading-relaxed">
          Your existing foundation (solid sleep, no smoking, sun awareness) means your body is ready to respond. Focus on these three areas, and you should see measurable score improvement within 4–6 weeks
        </p>
      </div>

      <div className="h-4" />
    </div>
  );
};
