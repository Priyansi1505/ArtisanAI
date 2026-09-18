'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import EmbroideryBorder from '@/components/decor/EmbroideryBorder';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <footer className="bg-forest text-cream/90 mt-24">
      <EmbroideryBorder tone="gold" />
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl text-cream mb-3">
            Artisan<span className="text-gold italic">AI</span>
          </p>
          <p className="text-sm text-cream/65 leading-relaxed max-w-xs">
            Real artisans. Real stories. Global reach. Every purchase goes straight back to the
            hands that made it.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={15} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gold mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-cream transition-colors">Shop</Link></li>
            <li><Link href="/artisans" className="hover:text-cream transition-colors">Our Artisans</Link></li>
            <li><Link href="/stories" className="hover:text-cream transition-colors">Stories</Link></li>
            <li><Link href="/about" className="hover:text-cream transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gold mb-4">Support</p>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li><a href="#" className="hover:text-cream transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Privacy</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gold mb-4">Join Our Community</p>
          <p className="text-sm text-cream/65 mb-4">
            One story a week from an artisan's workshop. No spam, ever.
          </p>
          {sent ? (
            <p className="text-sm text-gold">You're on the list — thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center border-b border-cream/30 focus-within:border-gold transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-transparent flex-1 py-2 text-sm placeholder:text-cream/40 focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="p-2 text-gold hover:translate-x-0.5 transition-transform">
                <ArrowRight size={17} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-5 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} ArtisanAI. Crafted with care in India.</span>
          <span>support@artisanai.com</span>
        </div>
      </div>
    </footer>
  );
}
