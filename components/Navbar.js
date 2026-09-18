'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/artisans', label: 'Our Artisans' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(59,33,24,0.1)]' : 'bg-cream/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="font-display text-2xl tracking-tight text-forest">
          Artisan<span className="text-terracotta italic">AI</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[15px] transition-colors ${
                  active ? 'text-terracotta' : 'text-brown/80 hover:text-terracotta'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-terracotta rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button aria-label="Search" className="hidden sm:flex p-2.5 rounded-full hover:bg-beige transition-colors">
            <Search size={19} strokeWidth={1.6} />
          </button>
          <button aria-label="Wishlist" className="hidden sm:flex p-2.5 rounded-full hover:bg-beige transition-colors">
            <Heart size={19} strokeWidth={1.6} />
          </button>
          <Link href="/cart" aria-label="Cart" className="relative p-2.5 rounded-full hover:bg-beige transition-colors">
            <ShoppingBag size={19} strokeWidth={1.6} />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 bg-terracotta text-cream text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <Link href="/login" aria-label="Account" className="hidden sm:flex p-2.5 rounded-full hover:bg-beige transition-colors">
            <User size={19} strokeWidth={1.6} />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full hover:bg-beige transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t hairline bg-cream"
          >
            <div className="container-page py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-base py-1 text-brown/85 hover:text-terracotta">
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="text-base py-1 text-brown/85 hover:text-terracotta">
                Login / Register
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
