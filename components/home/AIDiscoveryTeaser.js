'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AIDiscoveryTeaser() {
  return (
    <section className="border-t hairline bg-forest text-cream">
      <div className="container-page py-16 lg:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-gold text-sm mb-4">
            <Sparkles size={15} /> AI Gift Finder
          </div>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-balance">
            Not sure what you're
            <br />
            <span className="italic">looking for?</span>
          </h2>
          <p className="text-cream/70 mt-4 max-w-sm leading-relaxed">
            Tell our AI who it's for, your budget, and the occasion. It reads every artisan's
            story to find pieces that actually fit — not just filters that match.
          </p>
          <Link
            href="/ai-discovery"
            className="inline-flex items-center gap-2 mt-6 bg-gold text-brown text-sm px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            Try AI Discovery <ArrowRight size={15} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-cream/5 border border-cream/15 rounded-sm p-6"
        >
          <p className="text-xs text-cream/50 mb-3">You type</p>
          <p className="bg-cream/10 rounded-md px-4 py-3 text-sm text-cream/90 leading-relaxed">
            "I need a gift for my mother under ₹2000 for Diwali. She likes traditional home decor."
          </p>
          <div className="flex items-center gap-2 text-xs text-gold mt-5 mb-3">
            <Sparkles size={13} /> ArtisanAI finds
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['✓ Under budget', '✓ Diwali-ready', '✓ Traditional decor'].map((t) => (
              <div key={t} className="bg-cream/10 rounded-md px-2 py-2 text-[11px] text-cream/80 text-center">
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
