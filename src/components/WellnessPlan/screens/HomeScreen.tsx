import React from 'react';
import { ChevronRight, Share2, Mail, QrCode } from 'lucide-react';
import type { Screen } from '../types';

interface HomeScreenProps {
  navigate: (screen: Screen) => void;
}

const PrysmLogo = () => (
  <div className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center">
    <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'serif' }}>P</span>
  </div>
);

const ProductThumb = ({ color }: { color: string }) => (
  <div
    className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-xs font-semibold shadow"
    style={{ background: color }}
  >
    <span className="text-2xl">💊</span>
  </div>
);

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigate }) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white">
      {/* Purple header */}
      <div
        className="px-4 pt-10 pb-6 text-white relative"
        style={{ background: 'linear-gradient(160deg, #5b21b6 0%, #7c3aed 50%, #4f46e5 100%)' }}
      >
        <div className="flex justify-between items-start mb-4">
          <PrysmLogo />
          <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
            <span className="text-white text-xs">✕</span>
          </div>
        </div>

        <h1 className="text-xl font-bold mb-2">Sarah's Prysm Wellness Plan</h1>
        <p className="text-white/80 text-xs leading-relaxed">
          We've generated your plan based on your score and Prysm Assessment. You can review each section by tapping the tiles below.{' '}
          <span className="font-semibold text-white">Check the sections you would like to include when sharing.</span>
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 px-4 py-4 space-y-3">
        {/* Score row */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('score')}
            className="flex items-center gap-2 bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-2xl px-4 py-3 shadow-md flex-1"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-sm">410</span>
            </div>
            <span className="text-sm font-semibold">Prysm Score</span>
          </button>

          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
            <span className="text-2xl">🌿</span>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-sm">
            <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
        </div>

        {/* Sarah's Prysm Overview */}
        <button
          onClick={() => navigate('score')}
          className="w-full flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">Sarah's Prysm Overview</p>
            <p className="text-xs text-gray-400 mt-0.5">02 Jun 2026 · 9:41am</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

        {/* Recommended products */}
        <button
          onClick={() => navigate('recommendations')}
          className="w-full text-left bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-gray-900">Recommended</p>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <ProductThumb color="linear-gradient(135deg,#1e3a5f,#2563eb)" />
            <ProductThumb color="linear-gradient(135deg,#164e63,#0891b2)" />
            <ProductThumb color="linear-gradient(135deg,#1e3a5f,#4f46e5)" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Sarah's Recommended Product Solutions</p>
        </button>

        {/* 90 Day Guide */}
        <button
          onClick={() => navigate('guide')}
          className="w-full text-left bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Your 90 DAY Guide</p>
              <p className="text-xs text-gray-400">Started 02 Jun 2026</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Week labels */}
          <div className="flex justify-between text-xs text-gray-400 mb-1 px-1">
            <span>Weeks 1–4</span>
            <span>Weeks 5–8</span>
            <span>Weeks 9–12</span>
          </div>

          {/* Phase bar */}
          <div className="flex gap-1 mb-2">
            <div className="flex-1 h-1.5 rounded-full bg-violet-600" />
            <div className="flex-1 h-1.5 rounded-full bg-gray-200" />
            <div className="flex-1 h-1.5 rounded-full bg-gray-200" />
          </div>

          <div className="space-y-1 mt-2">
            {[
              { label: 'Foundation Building', phase: 'Weeks 1–4' },
              { label: 'Building Momentum', phase: 'Weeks 5–8' },
              { label: 'Optimization & Results', phase: 'Weeks 9–12' },
            ].map((p) => (
              <div key={p.phase} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-xs font-medium text-gray-700">{p.label}</p>
                  <p className="text-xs text-gray-400">{p.phase}</p>
                </div>
                <ChevronRight className="w-3 h-3 text-gray-300" />
              </div>
            ))}
          </div>
        </button>

        {/* Share section */}
        <div className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-900 mb-3">Share this Prysm Wellness Plan</p>
          <div className="flex items-center gap-3">
            {/* QR placeholder */}
            <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
              <QrCode className="w-10 h-10 text-gray-500" />
            </div>
            <div className="flex-1 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white rounded-xl py-2.5 text-xs font-semibold">
                <Share2 className="w-3.5 h-3.5" />
                Share
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 rounded-xl py-2.5 text-xs font-medium">
                <Mail className="w-3.5 h-3.5" />
                Email via MySite
              </button>
            </div>
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
};
