'use client';

import { motion } from 'framer-motion';
import { Users, Sparkles, HandCoins, Globe2, Landmark } from 'lucide-react';

const benefits = [
  { icon: Users, title: 'Support local artisans', desc: 'Every order supports a named craftsperson, not a factory line.' },
  { icon: Sparkles, title: 'Authentic handmade products', desc: 'No mass production — each piece carries the maker\u2019s hand.' },
  { icon: HandCoins, title: 'Fair prices, direct trade', desc: 'Artisans set their own prices; we take a transparent, small margin.' },
  { icon: Landmark, title: 'Preserve Indian heritage', desc: 'Techniques passed through generations, kept alive by demand.' },
  { icon: Globe2, title: 'Global access', desc: 'Shipped from village workshops to doorsteps anywhere in the world.' },
];

export default function WhyChoose() {
  return (
    <section className="container-page py-16 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl sm:text-4xl text-brown mb-10 max-w-md"
      >
        Why shop with ArtisanAI?
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-brown/10 border hairline">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="bg-cream p-6 flex flex-col gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center">
              <b.icon size={20} strokeWidth={1.4} className="text-terracotta" />
            </div>
            <div>
              <p className="text-[15px] text-brown mb-1.5 leading-snug">{b.title}</p>
              <p className="text-sm text-brown/60 leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
