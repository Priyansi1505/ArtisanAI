'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white/50 border hairline rounded-sm p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-10 text-center"
          >
            <p className="font-display text-2xl text-forest mb-2">Message sent</p>
            <p className="text-sm text-brown/60">We'll get back to you within one business day.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-brown/60 block mb-1.5">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm text-brown/60 block mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="text-sm text-brown/60 block mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta resize-none"
              />
            </div>
            <button type="submit" className="btn-primary rounded-full px-8 py-3 text-sm w-full">
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
