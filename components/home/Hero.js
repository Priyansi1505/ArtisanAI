'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import EmbroideryBorder from '@/components/decor/EmbroideryBorder';
import CornerMotif from '@/components/decor/CornerMotif';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <EmbroideryBorder tone="terracotta" />
      <CornerMotif className="hidden md:block absolute -top-2 left-4 w-24 h-24 opacity-70 pointer-events-none" />
      <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-12 py-14 lg:py-20 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-terracotta text-sm mb-5 tracking-wide">
            Handcrafted · Sustainable · Rooted in India
          </motion.p>
          <motion.h1 variants={item} className="font-display text-[2.6rem] sm:text-6xl leading-[1.04] text-brown text-balance">
            Handmade by real people,
            <br />
            <span className="italic text-terracotta">not just machines.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-brown/70 text-base max-w-md leading-relaxed">
            Discover authentic Indian crafts directly from local artisans — and let our AI help
            you find the piece that fits your story, your budget, and the person you're buying
            for.
          </motion.p>

          <motion.form
            variants={item}
            action="/shop"
            className="mt-8 flex items-center gap-2 bg-white/70 border hairline rounded-full pl-5 pr-1.5 py-1.5 max-w-md focus-within:border-terracotta transition-colors"
          >
            <Search size={16} className="text-brown/40 shrink-0" />
            <input
              name="q"
              placeholder="Search products, artisans, or crafts…"
              className="flex-1 bg-transparent text-sm py-2 focus:outline-none placeholder:text-brown/40"
            />
            <button type="submit" className="btn-primary text-sm px-5 py-2.5 rounded-full whitespace-nowrap">
              Explore
            </button>
          </motion.form>

          <motion.div variants={item} className="flex gap-8 mt-10 text-sm">
            <div>
              <p className="font-display text-2xl text-forest">500+</p>
              <p className="text-brown/55 text-xs mt-0.5">Artisans</p>
            </div>
            <div>
              <p className="font-display text-2xl text-forest">10,000+</p>
              <p className="text-brown/55 text-xs mt-0.5">Products</p>
            </div>
            <div>
              <p className="font-display text-2xl text-forest">20+</p>
              <p className="text-brown/55 text-xs mt-0.5">States & Regions</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <p className="hidden sm:block absolute -top-8 right-2 font-display italic text-brown/70 text-base leading-snug text-right rotate-[-3deg]">
            Real People,
            <br />
            Real Stories,
            <br />
            Real Crafts
          </p>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-4 border-cream shadow-[0_0_0_1px_rgba(59,33,24,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan shaping clay by hand"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-forest text-cream px-6 py-4 rounded-sm max-w-[220px] hidden sm:block"
          >
            <p className="font-display italic text-lg leading-snug">
              Crafting traditions, empowering lives
            </p>
          </motion.div>
        </motion.div>
      </div>
      <EmbroideryBorder tone="terracotta" />
    </section>
  );
}
