'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/lib/data';

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, hydrated } = useCart();
  const shipping = items.length > 0 ? 200 : 0;
  const total = subtotal + shipping;

  if (hydrated && items.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <ShoppingBag size={36} className="mx-auto text-brown/30 mb-5" strokeWidth={1.3} />
        <h1 className="font-display text-3xl text-brown mb-3">Your cart is empty</h1>
        <p className="text-brown/60 mb-8">Nothing here yet — go find something made by hand.</p>
        <Link href="/shop" className="btn-primary rounded-full px-8 py-3 text-sm inline-block">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12 lg:py-16">
      <h1 className="font-display text-4xl text-brown mb-10">Your Cart</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-12">
        <div className="divide-y hairline border-y hairline">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-5 py-5"
              >
                <div className="relative w-20 h-20 rounded-sm overflow-hidden bg-beige shrink-0">
                  <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${item.id}`} className="text-sm text-brown hover:text-terracotta transition-colors line-clamp-1">
                    {item.name}
                  </Link>
                  <p className="text-sm text-brown/50 mt-1">{formatINR(item.price)}</p>
                </div>
                <div className="flex items-center border hairline rounded-full">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 flex items-center justify-center hover:text-terracotta" aria-label="Decrease quantity">
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-xs">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center hover:text-terracotta" aria-label="Increase quantity">
                    <Plus size={12} />
                  </button>
                </div>
                <p className="w-20 text-right text-sm text-brown">{formatINR(item.price * item.qty)}</p>
                <button onClick={() => removeItem(item.id)} aria-label="Remove item" className="text-brown/40 hover:text-terracotta">
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="border hairline rounded-sm p-6 h-fit">
          <h2 className="font-display text-xl text-brown mb-5">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-brown/65">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-brown/65">
              <span>Shipping</span>
              <span>{formatINR(shipping)}</span>
            </div>
          </div>
          <div className="flex justify-between mt-5 pt-5 border-t hairline">
            <span className="text-brown">Total</span>
            <span className="font-display text-xl text-brown">{formatINR(total)}</span>
          </div>
          <Link href="/checkout" className="btn-primary rounded-full px-6 py-3 text-sm w-full mt-6 block text-center">
            Proceed to Checkout
          </Link>
          <Link href="/shop" className="text-center text-sm text-terracotta mt-4 block hover:underline underline-offset-4">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
