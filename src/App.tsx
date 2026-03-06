import './index.css';
import { HeroBanner } from './components/HeroBanner';

const DEMO_SLIDES = [
  {
    eyebrow: 'ageLOC LumiSpa',
    title: 'A Beauty & Wellness Device Revolution',
    description:
      'Putting the most powerful, proven technologies in the palm of your hand.',
    ctaLabel: 'Shop Devices',
    ctaHref: '#',
    backgroundImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80',
    backgroundAlt: 'Beauty device lifestyle photo',
  },
  {
    eyebrow: 'Nu Skin Enterprises',
    title: 'Feel Confident in Your Own Skin',
    description:
      'Discover clinically-tested formulas designed to help you look and feel your best every day.',
    ctaLabel: 'Explore Products',
    ctaHref: '#',
    backgroundImage:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1600&q=80',
    backgroundAlt: 'Skincare product lifestyle',
  },
  {
    eyebrow: 'ageLOC Meta',
    title: 'Science-Backed Supplements for Inner Vitality',
    description:
      'Fuel your body with precision nutrition engineered for the way you live.',
    ctaLabel: 'Shop Supplements',
    ctaHref: '#',
    backgroundImage:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80',
    backgroundAlt: 'Wellness and nutrition lifestyle',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroBanner slides={DEMO_SLIDES} autoPlayInterval={5000} />
    </div>
  );
}
