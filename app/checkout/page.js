'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Smartphone, CreditCard, Landmark, Wallet } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/lib/data';

const steps = ['Delivery Address', 'Order Summary', 'Payment'];
const paymentMethods = [
  { id: 'upi', label: 'UPI', icon: Smartphone },
  { id: 'card', label: 'Cards', icon: CreditCard },
  { id: 'netbanking', label: 'Net Banking', icon: Landmark },
  { id: 'wallet', label: 'Wallets', icon: Wallet },
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState('upi');
  const [placed, setPlaced] = useState(false);
  const [address, setAddress] = useState({ name: '', line1: '', city: '', pincode: '', phone: '' });
  const shipping = items.length > 0 ? 200 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="container-page py-24 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.4 }}>
          <CheckCircle2 size={48} className="mx-auto text-forest mb-5" strokeWidth={1.3} />
        </motion.div>
        <h1 className="font-display text-3xl text-brown mb-3">Order confirmed</h1>
        <p className="text-brown/60 mb-1">Order #{Math.floor(1000 + Math.random() * 9000)}</p>
        <p className="text-brown/60 mb-8">We'll email you tracking details once it ships.</p>
        <Link href="/shop" className="btn-primary rounded-full px-8 py-3 text-sm inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-3xl text-brown mb-3">Nothing to check out</h1>
        <p className="text-brown/60 mb-8">Your cart is empty.</p>
        <Link href="/shop" className="btn-primary rounded-full px-8 py-3 text-sm inline-block">Browse the shop</Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12 lg:py-16">
      <h1 className="font-display text-4xl text-brown mb-10">Checkout</h1>

      <div className="flex items-center gap-3 mb-12 max-w-lg">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${i <= step ? 'bg-terracotta text-cream' : 'bg-beige text-brown/50'}`}>
              {i + 1}
            </div>
            <span className={`text-xs hidden sm:inline ${i <= step ? 'text-brown' : 'text-brown/40'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`h-px flex-1 ${i < step ? 'bg-terracotta' : 'bg-beige'}`} />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-12">
        <div>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="address" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="space-y-5 max-w-md">
                <div>
                  <label className="text-sm text-brown/60 block mb-1.5">Full name</label>
                  <input value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
                </div>
                <div>
                  <label className="text-sm text-brown/60 block mb-1.5">Address</label>
                  <input value={address.line1} onChange={(e) => setAddress({ ...address, line1: e.target.value })} className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-brown/60 block mb-1.5">City</label>
                    <input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
                  </div>
                  <div>
                    <label className="text-sm text-brown/60 block mb-1.5">Pincode</label>
                    <input value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-brown/60 block mb-1.5">Phone</label>
                  <input value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} className="w-full border hairline rounded-md px-4 py-2.5 text-sm bg-white/70 focus:outline-none focus:border-terracotta" />
                </div>
                <button onClick={() => setStep(1)} className="btn-primary rounded-full px-8 py-3 text-sm">Continue</button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="summary" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="max-w-md">
                <div className="divide-y hairline border-y hairline mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-3 text-sm">
                      <span className="text-brown/70">{item.name} × {item.qty}</span>
                      <span className="text-brown">{formatINR(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-brown/60 mb-1">Delivering to</p>
                <p className="text-sm text-brown">{address.name || 'Your name'}, {address.line1 || 'Address'}, {address.city || 'City'} {address.pincode}</p>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(0)} className="btn-outline rounded-full px-6 py-3 text-sm">Back</button>
                  <button onClick={() => setStep(2)} className="btn-primary rounded-full px-8 py-3 text-sm">Continue to Payment</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="payment" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }} className="max-w-md">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {paymentMethods.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={`flex items-center gap-2 border rounded-md px-4 py-3 text-sm transition-colors ${
                        method === m.id ? 'border-terracotta text-terracotta bg-terracotta/5' : 'hairline text-brown/70 hover:border-terracotta'
                      }`}
                    >
                      <m.icon size={16} /> {m.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-brown/45 mb-6">Powered by Razorpay · your payment details are never stored on our servers.</p>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-outline rounded-full px-6 py-3 text-sm">Back</button>
                  <button onClick={handlePlaceOrder} className="btn-primary rounded-full px-8 py-3 text-sm">
                    Pay {formatINR(total)}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border hairline rounded-sm p-6 h-fit">
          <h2 className="font-display text-lg text-brown mb-4">Order total</h2>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between text-brown/65"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="flex justify-between text-brown/65"><span>Shipping</span><span>{formatINR(shipping)}</span></div>
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t hairline">
            <span className="text-brown">Total</span>
            <span className="font-display text-lg text-brown">{formatINR(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
