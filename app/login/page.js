'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [mode, setMode] = useState('login');

  return (
    <div className="container-page py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-3xl text-brown text-center mb-2">
          {mode === 'login' ? 'Welcome to ArtisanAI' : 'Create your account'}
        </h1>
        <p className="text-sm text-brown/55 text-center mb-8">
          {mode === 'login' ? 'Sign in to track orders and save favourites.' : 'Join to shop handmade and support artisans directly.'}
        </p>

        <AnimatePresence mode="wait">
          <motion.form
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {mode === 'register' && (
              <div>
                <label className="text-sm text-brown/60 block mb-1.5">Name</label>
                <input className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
              </div>
            )}
            <div>
              <label className="text-sm text-brown/60 block mb-1.5">Email</label>
              <input type="email" className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
            </div>
            <div>
              <label className="text-sm text-brown/60 block mb-1.5">Password</label>
              <input type="password" className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
            </div>
            {mode === 'register' && (
              <div>
                <label className="text-sm text-brown/60 block mb-1.5">Confirm password</label>
                <input type="password" className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
              </div>
            )}

            {mode === 'login' && (
              <div className="text-right">
                <a href="#" className="text-xs text-terracotta hover:underline underline-offset-4">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn-primary rounded-full px-6 py-3 text-sm w-full">
              {mode === 'login' ? 'Login' : 'Create Account'}
            </button>
          </motion.form>
        </AnimatePresence>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-brown/10" />
          <span className="text-xs text-brown/40">OR</span>
          <div className="h-px flex-1 bg-brown/10" />
        </div>

        <button className="w-full border hairline rounded-full px-6 py-3 text-sm hover:border-terracotta hover:text-terracotta transition-colors">
          Continue with Google
        </button>

        <p className="text-center text-sm text-brown/60 mt-8">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-terracotta hover:underline underline-offset-4">
            {mode === 'login' ? 'Create account' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
