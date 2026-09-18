'use client';

import { motion } from 'framer-motion';
import EmbroideryBorder from '@/components/decor/EmbroideryBorder';

export default function QuoteBanner() {
  return (
    <section className="relative bg-[#4A1E17] text-cream overflow-hidden">
      <EmbroideryBorder tone="maroon" />

      {/* faint skyline silhouette, evoking a temple / village border motif */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-16 opacity-[0.08]"
      >
        <path
          fill="#F8F1E5"
          d="M0 90 L0 60 L40 60 L40 40 L60 20 L80 40 L80 60 L120 60 L120 30 L140 10 L160 30 L160 60
             L200 60 L200 45 L220 25 L240 45 L240 60 L280 60 L280 35 L300 15 L320 35 L320 60
             L360 60 L360 50 L380 30 L400 50 L400 60 L440 60 L440 20 L460 5 L480 20 L480 60
             L520 60 L520 40 L540 20 L560 40 L560 60 L600 60 L600 30 L620 10 L640 30 L640 60
             L680 60 L680 45 L700 25 L720 45 L720 60 L760 60 L760 35 L780 15 L800 35 L800 60
             L840 60 L840 20 L860 5 L880 20 L880 60 L920 60 L920 40 L940 20 L960 40 L960 60
             L1000 60 L1000 45 L1020 25 L1040 45 L1040 60 L1080 60 L1080 30 L1100 10 L1120 30 L1120 60
             L1160 60 L1160 45 L1180 25 L1200 45 L1200 90 Z"
        />
      </svg>

      <div className="container-page py-14 lg:py-16 relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display italic text-xl sm:text-3xl leading-snug max-w-2xl mx-auto text-balance"
        >
          &ldquo;When you buy from an artisan, you&rsquo;re not just buying a product &mdash; you&rsquo;re
          helping a dream stay alive.&rdquo;
        </motion.p>
      </div>

      <EmbroideryBorder tone="maroon" />
    </section>
  );
}
