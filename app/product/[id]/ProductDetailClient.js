'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Star, Truck, ShieldCheck, Heart } from 'lucide-react';
import { formatINR } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailClient({ product, artisan, related }) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="container-page py-10 lg:py-14">
      <div className="text-xs text-brown/50 mb-8 flex gap-2 items-center">
        <Link href="/shop" className="hover:text-terracotta">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="relative aspect-square rounded-sm overflow-hidden bg-beige mb-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={product.gallery[activeImage]} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-20 rounded-sm overflow-hidden border ${
                    activeImage === i ? 'border-terracotta' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-3xl sm:text-[2.4rem] leading-tight text-brown text-balance">{product.name}</h1>
          <Link href={`/artisans/${artisan.id}`} className="text-sm text-terracotta mt-2 inline-block hover:underline underline-offset-4">
            by {artisan.name}
          </Link>

          <div className="flex items-center gap-4 mt-3 text-sm text-brown/60">
            <span className="flex items-center gap-1">
              <Star size={13} className="fill-gold text-gold" /> {product.rating} ({product.reviews} reviews)
            </span>
            <span>📍 {product.region}</span>
          </div>

          <p className="font-display text-3xl text-brown mt-6">{formatINR(product.price)}</p>

          <p className="text-brown/70 leading-relaxed mt-5 max-w-md">{product.description}</p>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border hairline rounded-full">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:text-terracotta"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center hover:text-terracotta"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>

            <button onClick={handleAdd} className="btn-primary rounded-full px-8 py-3 text-sm flex-1 sm:flex-none">
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
            <button aria-label="Add to wishlist" className="w-11 h-11 rounded-full border hairline flex items-center justify-center hover:border-terracotta hover:text-terracotta">
              <Heart size={16} />
            </button>
          </div>

          <AnimatePresence>
            {added && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-forest mt-3"
              >
                {product.name} added to your cart.
              </motion.p>
            )}
          </AnimatePresence>

          <Link href={`/checkout`} className="block text-center btn-outline rounded-full px-8 py-3 text-sm mt-3 w-full sm:w-auto sm:inline-block">
            Buy Now
          </Link>

          <div className="grid sm:grid-cols-2 gap-4 mt-10 pt-8 border-t hairline">
            <div className="flex gap-3">
              <Truck size={18} className="text-terracotta shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-brown">Ships in 3–5 days</p>
                <p className="text-xs text-brown/55 mt-0.5">Made to order by {artisan.name}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck size={18} className="text-terracotta shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-brown">Verified authentic</p>
                <p className="text-xs text-brown/55 mt-0.5">100% handmade, quality checked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-10 mt-16 pt-16 border-t hairline">
        <div>
          <p className="text-terracotta text-sm mb-2">The Craft</p>
          <h3 className="font-display text-xl text-brown mb-3">How it's made</h3>
          <p className="text-sm text-brown/65 leading-relaxed">{artisan.process}</p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-brown/50 w-24 shrink-0">Materials</dt>
              <dd className="text-brown/75">{product.materials}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-brown/50 w-24 shrink-0">Origin</dt>
              <dd className="text-brown/75">{product.origin}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-brown/50 w-24 shrink-0">Care</dt>
              <dd className="text-brown/75">{product.care}</dd>
            </div>
          </dl>
        </div>

        <Link href={`/artisans/${artisan.id}`} className="group relative rounded-sm overflow-hidden block min-h-[220px]">
          <Image src={artisan.cover} alt={artisan.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-brown/50 flex flex-col justify-end p-6">
            <p className="text-cream/70 text-xs mb-1">Meet the artisan</p>
            <p className="font-display text-2xl text-cream">{artisan.name}</p>
            <p className="text-cream/70 text-sm mt-1">{artisan.craft} · {artisan.years} years of practice</p>
          </div>
        </Link>
      </div>

      {related.length > 0 && (
        <div className="mt-16 pt-16 border-t hairline">
          <h3 className="font-display text-2xl sm:text-3xl text-brown mb-8">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
