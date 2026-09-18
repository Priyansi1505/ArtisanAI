'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function ArtisanCard({ artisan, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    >
      <Link href={`/artisans/${artisan.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-beige">
          <Image
            src={artisan.image}
            alt={artisan.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-cream">
            <p className="font-display text-lg leading-tight">{artisan.name}</p>
            <p className="text-xs text-cream/80 mt-0.5">{artisan.craft}</p>
            <div className="flex items-center justify-between mt-2 text-xs text-cream/70">
              <span>{artisan.region}</span>
              <span className="flex items-center gap-1">
                <Star size={11} className="fill-gold text-gold" /> {artisan.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
