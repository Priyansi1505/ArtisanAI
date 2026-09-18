import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import OurStory from '@/components/home/OurStory';
import WhyChoose from '@/components/home/WhyChoose';
import HowItWorks from '@/components/home/HowItWorks';
import AIDiscoveryTeaser from '@/components/home/AIDiscoveryTeaser';
import RegionCommunity from '@/components/home/RegionCommunity';
import StoriesSection from '@/components/home/StoriesSection';
import QuoteBanner from '@/components/home/QuoteBanner';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';
import Link from 'next/link';
import { products, artisans } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />

      <section className="container-page py-16 lg:py-20 border-t hairline">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-terracotta text-sm mb-2">Featured Artisans</p>
            <h2 className="font-display text-3xl sm:text-4xl text-brown">The people behind the craft</h2>
          </div>
          <Link href="/artisans" className="hidden sm:block text-sm text-terracotta hover:underline underline-offset-4">
            Meet all artisans
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {artisans.map((artisan, i) => (
            <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
          ))}
        </div>
      </section>

      <OurStory />
      <WhyChoose />

      <section className="container-page py-16 lg:py-20 border-t hairline">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-terracotta text-sm mb-2">Our Handpicked Creations</p>
            <h2 className="font-display text-3xl sm:text-4xl text-brown">Authentic. Handcrafted. One of a kind.</h2>
          </div>
          <Link href="/shop" className="hidden sm:block text-sm text-terracotta hover:underline underline-offset-4">
            View all products
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <AIDiscoveryTeaser />
      <RegionCommunity />
      <StoriesSection />
      <QuoteBanner />
    </>
  );
}
