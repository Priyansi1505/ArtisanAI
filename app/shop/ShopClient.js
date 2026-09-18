'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesQuery = query.trim() === '' || p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || p.category === category;
      const matchesPrice = p.price <= maxPrice;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [query, category, maxPrice, sort]);

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="mb-10 max-w-lg">
        <p className="text-terracotta text-sm mb-2">Shop Handmade</p>
        <h1 className="font-display text-4xl text-brown">Discover authentic crafts from across India</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Try "something for my mother under ₹2000"'
          className="flex-1 border hairline bg-white/60 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-terracotta"
        />
        <a
          href={`/ai-discovery${query ? `?q=${encodeURIComponent(query)}` : ''}`}
          className="flex items-center justify-center gap-2 text-sm border hairline rounded-full px-5 py-3 hover:border-terracotta hover:text-terracotta transition-colors whitespace-nowrap"
        >
          <Sparkles size={14} /> Ask AI instead
        </a>
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center gap-2 text-sm border hairline rounded-full px-5 py-3"
        >
          <SlidersHorizontal size={14} /> Filters
        </button>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        <AnimatePresence initial={false}>
          {(filtersOpen || true) && (
            <motion.aside
              className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}
            >
              <div className="flex items-center justify-between mb-5 lg:hidden">
                <p className="text-sm text-brown/60">Filters</p>
                <button onClick={() => setFiltersOpen(false)}><X size={16} /></button>
              </div>

              <div className="mb-8">
                <p className="text-sm text-brown mb-3">Craft</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-left text-sm py-1 ${category === 'all' ? 'text-terracotta' : 'text-brown/65 hover:text-terracotta'}`}
                  >
                    All Crafts
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => setCategory(c.slug)}
                      className={`text-left text-sm py-1 ${category === c.slug ? 'text-terracotta' : 'text-brown/65 hover:text-terracotta'}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-brown mb-3">Max price: ₹{maxPrice.toLocaleString('en-IN')}</p>
                <input
                  type="range"
                  min={500}
                  max={15000}
                  step={500}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-terracotta"
                />
              </div>

              <div>
                <p className="text-sm text-brown mb-3">Sort by</p>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full border hairline rounded-md px-3 py-2 text-sm bg-white/60 focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <div>
          <p className="text-sm text-brown/55 mb-6">{filtered.length} products</p>
          {filtered.length === 0 ? (
            <div className="border hairline rounded-sm py-20 text-center">
              <p className="text-brown/60 text-sm">No products match those filters yet. Try widening your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
