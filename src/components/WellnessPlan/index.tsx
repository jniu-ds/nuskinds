import React, { useState } from 'react';
import type { Screen } from './types';
import { HomeScreen } from './screens/HomeScreen';
import { ScoreScreen } from './screens/ScoreScreen';
import { RecommendationsScreen } from './screens/RecommendationsScreen';
import { MyShopScreen } from './screens/MyShopScreen';
import { GuideScreen } from './screens/GuideScreen';
import { ChallengeScreen } from './screens/ChallengeScreen';

const SCREEN_LABELS: Record<Screen, string> = {
  home: 'Wellness Plan',
  score: 'Prysm Score',
  recommendations: 'Recommendations',
  myshop: 'My Shop',
  guide: '90 Day Guide',
  challenge: '15 Day Challenge',
};

export const WellnessPlan: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home');

  const navigate = (s: Screen) => setScreen(s);

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HomeScreen navigate={navigate} />;
      case 'score':
        return <ScoreScreen navigate={navigate} />;
      case 'recommendations':
        return <RecommendationsScreen navigate={navigate} />;
      case 'myshop':
        return <MyShopScreen navigate={navigate} />;
      case 'guide':
        return <GuideScreen navigate={navigate} />;
      case 'challenge':
        return <ChallengeScreen navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center py-8 px-4">
      {/* Prototype label */}
      <div className="mb-4 text-center">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
          Prysm Wellness Plan · Clickable Prototype
        </span>
        <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
          {(Object.keys(SCREEN_LABELS) as Screen[]).map((s) => (
            <button
              key={s}
              onClick={() => navigate(s)}
              className={`text-[10px] px-2.5 py-1 rounded-full font-medium transition-all ${
                screen === s
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400'
              }`}
            >
              {SCREEN_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      {/* Phone frame */}
      <div
        className="relative bg-black rounded-[3rem] shadow-2xl overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-b-2xl z-50 flex items-center justify-center">
          <div className="w-20 h-5 bg-black rounded-full" />
        </div>

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-12 z-40 flex items-start justify-between px-8 pt-3">
          <span className="text-[11px] font-semibold" style={{ color: screen === 'challenge' ? 'rgba(255,255,255,0.8)' : screen === 'recommendations' || screen === 'myshop' ? '#111' : 'rgba(255,255,255,0.8)' }}>
            9:41
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex gap-0.5">
              {[3, 4, 5, 6].map((h) => (
                <div
                  key={h}
                  className="w-0.5 rounded-sm"
                  style={{
                    height: h,
                    background: screen === 'recommendations' || screen === 'myshop' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)',
                  }}
                />
              ))}
            </div>
            <div
              className="w-3.5 h-2.5 rounded-sm border ml-1"
              style={{
                borderColor: screen === 'recommendations' || screen === 'myshop' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.5)',
              }}
            >
              <div
                className="m-0.5 h-full rounded-sm"
                style={{
                  background: screen === 'recommendations' || screen === 'myshop' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)',
                  width: '75%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
          {renderScreen()}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
      </div>

      {/* Current screen label */}
      <p className="mt-4 text-xs text-gray-400">
        Current screen: <span className="font-semibold text-gray-600">{SCREEN_LABELS[screen]}</span>
      </p>
    </div>
  );
};
