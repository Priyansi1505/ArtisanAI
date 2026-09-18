'use client';

import { motion } from 'framer-motion';
import { Search, HeartHandshake, ShoppingBasket, Sparkles } from 'lucide-react';
import EmbroideryBorder from '@/components/decor/EmbroideryBorder';

const steps = [
  { icon: Search, title: 'Browse', desc: 'Explore authentic crafts and the stories behind them.' },
  { icon: HeartHandshake, title: 'Connect', desc: 'Meet and support the local artisan who made each piece.' },
  { icon: ShoppingBasket, title: 'Buy', desc: 'Secure checkout, shipped straight from the workshop.' },
  { icon: Sparkles, title: 'Empower', desc: 'Your purchase builds livelihoods and preserves tradition.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-beige/60 border-t hairline">
      <EmbroideryBorder tone="terracotta" />
      <div className="container-page py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-lg"
        >
          <p className="text-terracotta text-sm mb-2 tracking-wide">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl text-brown">
            Getting your favourite handcrafted piece is simple
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="relative w-20 h-20 rounded-full bg-cream border hairline flex items-center justify-center shadow-sm">
                <s.icon size={26} strokeWidth={1.4} className="text-terracotta" />
                <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-forest text-cream text-xs flex items-center justify-center font-display">
                  {i + 1}
                </span>
              </div>
              <p className="font-display text-lg text-brown mt-4">{s.title}</p>
              <p className="text-sm text-brown/60 mt-1.5 max-w-[190px] leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-10 left-[calc(50%+48px)] w-[calc(100%-96px)] border-t border-dashed border-terracotta/35" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <EmbroideryBorder tone="terracotta" />
    </section>
  );
}
