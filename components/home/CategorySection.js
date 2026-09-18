'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Amphora, Shirt, Hammer, Gem, Home, Scissors, Leaf } from 'lucide-react';
import { categories } from '@/lib/data';

const ICONS = {
  pottery: Amphora,
  textiles: Shirt,
  woodwork: Hammer,
  jewellery: Gem,
  'home-decor': Home,
  handloom: Scissors,
  'bamboo-cane': Leaf,
};

const TINTS = [
  'bg-terracotta/12 text-terracotta',
  'bg-forest/10 text-forest',
  'bg-gold/15 text-gold',
  'bg-terracotta/10 text-terracotta',
  'bg-forest/12 text-forest',
  'bg-gold/12 text-gold',
  'bg-terracotta/12 text-terracotta',
];

export default function CategorySection() {
  return (
    <section className="container-page py-16 lg:py-20 border-t hairline">
      <div className="flex items-end justify-between mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl text-brown"
        >
          Shop by craft <span className="text-terracotta italic">/ category</span>
        </motion.h2>
        <Link href="/shop" className="hidden sm:block text-sm text-terracotta hover:underline underline-offset-4">
          View all crafts
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
        {categories.map((cat, i) => {
          const Icon = ICONS[cat.slug] || Leaf;
          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 7) * 0.05 }}
            >
              <Link href={`/shop?category=${cat.slug}`} className="group block text-center">
                <div
                  className={`relative aspect-square rounded-full overflow-hidden border hairline flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${TINTS[i % TINTS.length]}`}
                >
                  <Icon size={26} strokeWidth={1.4} />
                </div>
                <p className="text-sm text-brown/80 mt-3 group-hover:text-terracotta transition-colors">{cat.name}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
