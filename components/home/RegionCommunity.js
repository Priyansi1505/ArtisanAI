'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CornerMotif from '@/components/decor/CornerMotif';

export default function RegionCommunity() {
  return (
    <section className="container-page py-16 lg:py-20 border-t hairline">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-sm overflow-hidden min-h-[280px] flex items-end"
        >
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop"
            alt="A traditional village workshop in India"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-forest/10" />
          <div className="relative p-8 sm:p-10 text-cream max-w-md">
            <p className="text-gold text-sm mb-2 tracking-wide">Explore</p>
            <h3 className="font-display text-3xl leading-tight">Crafts by Region</h3>
            <p className="text-cream/75 text-sm mt-3 leading-relaxed">
              From the vibrant textiles of Gujarat to the intricate woodwork of Kashmir, discover
              crafts from across India.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-5 bg-terracotta text-cream text-sm px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors"
            >
              Explore by region <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-sm border hairline bg-beige/50 p-8 sm:p-10 flex flex-col justify-center overflow-hidden"
        >
          <CornerMotif className="absolute -bottom-6 -right-6 w-32 h-32 opacity-40 pointer-events-none" />
          <h3 className="font-display text-2xl sm:text-3xl text-brown leading-tight relative">
            Join Our Artisan Community
          </h3>
          <p className="text-brown/65 text-sm mt-3 leading-relaxed relative max-w-xs">
            Are you an artisan? We&rsquo;d love to have you on ArtisanAI. Get listed, showcase your
            work, and reach more buyers across the country.
          </p>
          <Link
            href="/login"
            className="relative inline-flex items-center gap-2 mt-6 btn-primary text-sm px-6 py-3 rounded-full w-fit"
          >
            Register as an artisan <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
