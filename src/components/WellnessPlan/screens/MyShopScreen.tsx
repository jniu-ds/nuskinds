import React, { useState } from 'react';
import { ChevronLeft, Search, Info, Check } from 'lucide-react';
import type { Screen } from '../types';

interface MyShopScreenProps {
  navigate: (screen: Screen) => void;
}

const PRODUCTS = [
  {
    id: 'mynd360-a',
    name: 'Mynd360 Night Time®',
    category: 'Sleep Support',
    price: '$53.00 Monthly',
    regularPrice: '$80.00',
    color: '#1e3a5f',
    emoji: '🌙',
    inPlan: true,
  },
  {
    id: 'beauty-focus-a',
    name: 'Beauty Focus Collagen+®',
    category: 'Collagen Support',
    price: '$51.00 Monthly',
    regularPrice: '$76.00',
    color: '#1a3a5c',
    emoji: '✨',
    inPlan: false,
  },
  {
    id: 'mynd360-b',
    name: 'Mynd360 Night Time®',
    category: 'Sleep Support',
    price: '$53.00 Monthly',
    regularPrice: '$80.00',
    color: '#1e3a5f',
    emoji: '🌙',
    inPlan: false,
  },
  {
    id: 'beauty-focus-b',
    name: 'Beauty Focus Collagen+®',
    category: 'Collagen Support',
    price: '$51.00 Monthly',
    regularPrice: '$76.00',
    color: '#1a3a5c',
    emoji: '✨',
    inPlan: true,
  },
  {
    id: 'mynd360-c',
    name: 'Mynd360 Night Time®',
    category: 'Sleep Support',
    price: '$53.00 Monthly',
    regularPrice: '$80.00',
    color: '#1e3a5f',
    emoji: '🌙',
    inPlan: false,
  },
];

export const MyShopScreen: React.FC<MyShopScreenProps> = ({ navigate }) => {
  const [search, setSearch] = useState('');
  const [planItems, setPlanItems] = useState<Set<string>>(
    new Set(PRODUCTS.filter((p) => p.inPlan).map((p) => p.id))
  );

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: string) => {
    setPlanItems((prev) => {
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
        <button onClick={() => navigate('recommendations')} className="p-1">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => setPlanItems(new Set())}
          className="text-xs text-gray-500"
        >
          Clear Selected
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            className="flex-1 bg-transparent text-xs outline-none text-gray-700 placeholder-gray-400"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 pb-3 gap-2">
        <button
          onClick={() => navigate('recommendations')}
          className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
        >
          Recommended
        </button>
        <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white">
          My Shop
        </button>
      </div>

      {/* Product list */}
      <div className="flex-1 overflow-y-auto px-4">
        {filtered.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-2xl p-3 mb-3 bg-white shadow-sm">
            <div className="flex gap-3">
              {/* Image */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${product.color}, #2563eb)` }}
              >
                {product.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-700">
                  {product.category}
                </span>
                <p className="text-xs font-semibold text-gray-900 mt-1 leading-tight">{product.name}</p>
                <p className="text-xs font-bold text-gray-900 mt-1">{product.price}</p>
                <p className="text-[10px] text-gray-400 line-through">{product.regularPrice}</p>
                <p className="text-[10px] text-gray-500">Cancel Anytime</p>
                <p className="text-[10px] text-gray-500">30 Day Guarantee ✓</p>
              </div>

              {/* Info icon */}
              <button className="self-start mt-0.5">
                <Info className="w-3.5 h-3.5 text-violet-500" />
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 border border-gray-300 text-gray-600 rounded-xl py-2 text-xs font-medium">
                Benefits
              </button>
              <button
                onClick={() => toggle(product.id)}
                className={`flex-1 rounded-xl py-2 text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  planItems.has(product.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-900 text-white'
                }`}
              >
                {planItems.has(product.id) ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    In Plan
                  </>
                ) : (
                  'Add to Plan'
                )}
              </button>
            </div>
          </div>
        ))}
        <div className="h-6" />
      </div>
    </div>
  );
};
