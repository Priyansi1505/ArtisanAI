import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const metadata = { title: 'About — ArtisanAI' };

const pillars = [
  { title: 'The Problem', body: 'Talented artisans across India lose income to middlemen and struggle to reach buyers beyond their local market — even as demand for authentic handmade goods grows worldwide.' },
  { title: 'Our Solution', body: 'A marketplace that pays artisans directly, tells the story behind every piece, and uses AI to help buyers find work that genuinely matches what they need.' },
  { title: 'How It Works', body: 'Artisans list their craft in their own words — by voice, if typing isn\u2019t easy. Our AI helps translate that into a listing, buyers browse and shop, and payment goes straight to the maker.' },
];

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[46vh] min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1600&auto=format&fit=crop"
          alt="Artisan workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brown/55 flex items-center">
          <div className="container-page text-cream max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-balance">
              More than a marketplace.
              <br />
              <span className="italic">It's a movement.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container-page py-16 lg:py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-terracotta text-sm mb-3">Our Mission</p>
          <p className="font-display text-2xl sm:text-3xl text-brown leading-snug text-balance">
            To make sure the person who made your favourite handmade piece can keep making it —
            for a fair price, with their story attached.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {pillars.map((p) => (
            <div key={p.title}>
              <h2 className="font-display text-xl text-brown mb-3">{p.title}</h2>
              <p className="text-sm text-brown/65 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-forest text-cream rounded-sm p-10 lg:p-14 grid lg:grid-cols-[auto_1fr] gap-6 items-start">
          <Sparkles size={28} className="text-gold shrink-0" />
          <div>
            <p className="text-gold text-sm mb-2">Why AI?</p>
            <p className="font-display text-2xl leading-snug text-balance">
              Technology should not replace artisans.
            </p>
            <p className="text-cream/70 mt-3 max-w-xl leading-relaxed">
              It should help artisans reach people who would never have discovered their work
              otherwise — by writing the listing they didn't have time to type, translating it
              into another language, or helping a buyer describe a gift they can't quite put
              into words.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-8 mt-20 text-center sm:text-left">
          {[
            ['500+', 'Artisans onboarded'],
            ['10,000+', 'Products listed'],
            ['20+', 'States represented'],
            ['100%', 'Paid directly to makers'],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-3xl text-terracotta">{num}</p>
              <p className="text-sm text-brown/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
