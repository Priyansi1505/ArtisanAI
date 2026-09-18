'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2 } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

const prompts = [
  'A gift for my mother under ₹2000 for Diwali. She likes traditional home decor.',
  'Something under ₹1500 for a housewarming gift, handloom or textile.',
  'A statement jewellery piece under ₹1200 for a friend\u2019s birthday.',
];

function matchProducts(text) {
  const lower = text.toLowerCase();
  const budgetMatch = lower.match(/(\d{3,6})/);
  const budget = budgetMatch ? Number(budgetMatch[1]) : null;

  const matchedCategory = categories.find((c) =>
    lower.includes(c.name.toLowerCase()) || lower.includes(c.slug.replace('-', ' '))
  );

  const reasons = [];
  let list = products;

  if (budget) {
    list = list.filter((p) => p.price <= budget);
    reasons.push(`Under ₹${budget.toLocaleString('en-IN')}`);
  }
  if (matchedCategory) {
    const inCategory = list.filter((p) => p.category === matchedCategory.slug);
    if (inCategory.length > 0) {
      list = inCategory;
      reasons.push(matchedCategory.name);
    }
  }
  if (lower.includes('gift')) reasons.push('Gift-ready');
  if (lower.includes('diwali') || lower.includes('festival')) reasons.push('Festival-appropriate');
  if (lower.includes('traditional')) reasons.push('Traditional craftsmanship');

  if (list.length === 0) list = [...products].sort((a, b) => a.price - b.price);
  if (reasons.length === 0) reasons.push('Highly rated', 'Made by hand');

  return { results: list.slice(0, 6), reasons };
}

export default function AIDiscoveryClient() {
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get('q') || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    window.setTimeout(() => {
      setResult(matchProducts(text));
      setLoading(false);
    }, 900);
  };

  return (
    <div className="container-page py-14 lg:py-20">
      <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-terracotta text-sm mb-4">
          <Sparkles size={15} /> AI Gift & Product Discovery
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-brown">What are you looking for?</h1>
        <p className="text-brown/60 mt-3">Tell us what you need, in your own words.</p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="I need a gift for my mother under ₹2000 for Diwali. She likes traditional home decor."
          className="w-full border hairline rounded-md p-5 text-sm bg-white/60 focus:outline-none focus:border-terracotta resize-none leading-relaxed"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary rounded-full px-7 py-3 text-sm mt-4 mx-auto flex items-center gap-2 disabled:opacity-70"
        >
          {loading ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />}
          {loading ? 'Finding your craft…' : 'Find My Craft'}
        </button>
      </form>

      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {prompts.map((p) => (
          <button
            key={p}
            onClick={() => setText(p)}
            className="text-xs border hairline rounded-full px-3 py-1.5 text-brown/60 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            {p.length > 42 ? p.slice(0, 42) + '…' : p}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-14"
          >
            <p className="text-sm text-brown/60 mb-3">Based on what you described, we found {result.results.length} handmade pieces.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {result.reasons.map((r) => (
                <span key={r} className="text-xs bg-forest/10 text-forest rounded-full px-3 py-1.5">✓ {r}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 mt-8 max-w-4xl mx-auto">
          {result.results.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
