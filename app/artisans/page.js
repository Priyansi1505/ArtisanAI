import ArtisanCard from '@/components/ArtisanCard';
import { artisans } from '@/lib/data';

export const metadata = { title: 'Our Artisans — ArtisanAI' };

export default function ArtisansPage() {
  return (
    <div className="container-page py-12 lg:py-16">
      <div className="max-w-lg mb-12">
        <p className="text-terracotta text-sm mb-2">Our Artisans</p>
        <h1 className="font-display text-4xl text-brown">The hands behind every piece</h1>
        <p className="text-brown/65 mt-4 leading-relaxed">
          Every artisan on ArtisanAI is verified and paid directly for their work. Browse by
          craft, region, or story to find someone whose work speaks to you.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        {artisans.map((artisan, i) => (
          <ArtisanCard key={artisan.id} artisan={artisan} index={i} />
        ))}
      </div>
    </div>
  );
}
