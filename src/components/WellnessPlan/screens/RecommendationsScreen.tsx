import React, { useState } from 'react';
import { ChevronLeft, Check, Info } from 'lucide-react';
import type { Screen } from '../types';

interface RecommendationsScreenProps {
  navigate: (screen: Screen) => void;
}

const FOUNDATIONAL = [
  {
    id: 'lifepak-elements',
    name: 'Pharmanex® LifePak Elements®',
    category: 'Core Nutritional Support',
    price: '$1.20/day',
    monthly: '$36.00 Monthly',
    level: 1,
    color: '#1e3a5f',
    emoji: '💊',
  },
  {
    id: 'lifepak',
    name: 'Pharmanex® LifePak®',
    category: 'Broad Nutritional Support',
    price: '$3.13/day',
    monthly: '$94.00 Monthly',
    level: 2,
    color: '#164e63',
    emoji: '💊',
  },
  {
    id: 'lifepak-nano',
    name: 'Pharmanex® LifePak Nano®',
    category: 'Advanced Nutritional Support',
    price: '$6.00/day',
    monthly: '$180.00 Monthly',
    level: 3,
    color: '#1e3a5f',
    emoji: '💊',
  },
] as const;

const TARGETED = [
  {
    id: 'mynd360-a',
    name: 'Mynd360 Night Time®',
    category: 'Sleep Support',
    price: '$1.70/day',
    monthly: '$51.00 Monthly',
    color: '#1e3a5f',
    emoji: '🌙',
  },
  {
    id: 'beauty-focus',
    name: 'Beauty Focus Collagen+®',
    category: 'Collagen Support',
    price: '$3.53/day',
    monthly: '$51.00 Monthly',
    color: '#1a3a5c',
    emoji: '✨',
  },
  {
    id: 'mynd360-b',
    name: 'Mynd360 Night Time®',
    category: 'Sleep Support',
    price: '$1.70/day',
    monthly: '$51.00 Monthly',
    color: '#1e3a5f',
    emoji: '🌙',
  },
];

const LevelBadge = ({ level }: { level: number }) => {
  const colors = ['', 'bg-blue-100 text-blue-700', 'bg-teal-100 text-teal-700', 'bg-indigo-100 text-indigo-700'];
  return (
    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${colors[level]}`}>
      LEVEL {level}
    </span>
  );
};

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  monthly: string;
  color: string;
  emoji: string;
  level?: number;
  selected: boolean;
  onToggle: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, category, price, monthly, color, emoji, level, selected, onToggle }) => (
  <div
    onClick={onToggle}
    className={`border rounded-2xl p-3 mb-3 cursor-pointer transition-all ${
      selected ? 'border-emerald-500 bg-emerald-50/30' : 'border-gray-200 bg-white'
    }`}
  >
    <div className="flex items-start gap-3">
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}, #2563eb)` }}
      >
        {emoji}
      </div>

      <div className="flex-1 min-w-0">
        {level !== undefined ? (
          <>
            <LevelBadge level={level} />
            <span className="ml-1 text-[9px] text-gray-400">{category}</span>
          </>
        ) : (
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-700">
            {category}
          </span>
        )}
        <p className="text-xs font-semibold text-gray-900 mt-1 leading-tight">{name}</p>
        <p className="text-xs font-bold text-gray-900">{price}</p>
        <p className="text-[10px] text-gray-300 line-through">Regular Price $48.00</p>
        <p className="text-[10px] text-gray-600">{monthly}</p>
        <p className="text-[10px] text-gray-400">Cancel Anytime</p>
        <p className="text-[10px] text-gray-400">30 Day Guarantee</p>
      </div>

      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <button className="text-violet-600 rounded-full p-1">
          <Info className="w-3.5 h-3.5" />
        </button>
        <div className="flex gap-2 mt-1">
          <button className="text-[10px] border border-gray-300 text-gray-600 rounded-lg px-2 py-1">
            Benefits
          </button>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              selected ? 'bg-emerald-500' : 'bg-gray-200'
            }`}
          >
            {selected ? (
              <Check className="w-4 h-4 text-white" />
            ) : (
              <span className="text-gray-400 text-sm">+</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const RecommendationsScreen: React.FC<RecommendationsScreenProps> = ({ navigate }) => {
  const [selectedFoundational, setSelectedFoundational] = useState<string>('lifepak-elements');
  const [selectedTargeted, setSelectedTargeted] = useState<Set<string>>(new Set(['mynd360-a', 'beauty-focus']));

  const toggleTargeted = (id: string) => {
    setSelectedTargeted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-10 pb-3 border-b border-gray-100">
        <button onClick={() => navigate('home')} className="p-1">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => setSelectedTargeted(new Set())}
          className="text-xs text-gray-500"
        >
          Clear Selected
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-4 pt-3 gap-2">
        <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white">
          Recommended
        </button>
        <button
          onClick={() => navigate('myshop')}
          className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
        >
          My Shop
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Prysm Logo */}
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-full border-2 border-violet-200 flex items-center justify-center">
            <span className="text-violet-600 font-bold text-xl" style={{ fontFamily: 'serif' }}>P</span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 text-center mb-2">Product Recommendation</h2>
        <p className="text-xs text-gray-600 leading-relaxed mb-4 text-center">
          Sarah, you are already off to a great start taking{' '}
          <span className="font-semibold">ReishiMax GLP</span> and{' '}
          <span className="font-semibold">Cartilage Formula</span>. We recommend everyone be on a foundational supplement for a great base. See all our foundational solutions here:
        </p>

        {/* Foundational */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Select <span className="text-gray-900">one</span> foundational solution.
        </p>
        {FOUNDATIONAL.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            selected={selectedFoundational === p.id}
            onToggle={() => setSelectedFoundational(p.id)}
          />
        ))}

        {/* Targeted intro */}
        <p className="text-xs text-gray-600 leading-relaxed my-4">
          Next, based on your assessment, you're already off to a strong foundation, and a few targeted additions can help you optimize further:{' '}
          <span className="font-semibold">Eye Formula</span> supports your eyes against UV and blue light exposure, while{' '}
          <span className="font-semibold">Beauty Focus® Collagen+</span> helps strengthen skin health and resilience — especially important given your current fruit and vegetable intake. As you increase your activity level,{' '}
          <span className="font-semibold">Beauty Focus® Collagen+</span> provides added support for bone strength and recovery, helping you stay strong and balanced as your fitness improves.
        </p>

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Select <span className="text-gray-900">as many</span> recommended targeted solutions as you need.
        </p>

        {TARGETED.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            selected={selectedTargeted.has(p.id)}
            onToggle={() => toggleTargeted(p.id)}
          />
        ))}

        <div className="h-20" />
      </div>

      {/* Save Changes button */}
      <div className="px-4 pb-6 pt-3 border-t border-gray-100 bg-white">
        <button
          onClick={() => navigate('home')}
          className="w-full bg-gray-900 text-white rounded-2xl py-3.5 text-sm font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
