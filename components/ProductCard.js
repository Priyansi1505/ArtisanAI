'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { formatINR, getArtisan } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();
  const artisan = getArtisan(product.artisanId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: 'easeOut' }}
      className="group"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked((v) => !v);
            }}
            aria-label="Add to wishlist"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors"
          >
            <Heart size={15} className={liked ? 'fill-terracotta text-terracotta' : 'text-brown'} strokeWidth={1.6} />
          </button>

          <motion.button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 1);
            }}
            initial={{ y: '100%' }}
            whileHover={{ y: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-forest text-cream text-sm py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </motion.button>
        </div>
      </Link>

      <div className="mt-3">
        <Link href={`/product/${product.id}`}>
          <p className="text-[15px] leading-snug text-brown group-hover:text-terracotta transition-colors">{product.name}</p>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-brown/55">
            by {artisan?.name} · 📍 {product.region.split(',')[1]?.trim() || product.region}
          </p>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-display text-lg text-brown">{formatINR(product.price)}</span>
          <span className="flex items-center gap-1 text-xs text-brown/70">
            <Star size={12} className="fill-gold text-gold" /> {product.rating}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
