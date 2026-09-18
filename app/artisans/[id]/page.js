import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { artisans, getArtisan, getProductsByArtisan } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import FollowButton from './FollowButton';

export function generateStaticParams() {
  return artisans.map((a) => ({ id: a.id }));
}

export function generateMetadata({ params }) {
  const artisan = getArtisan(params.id);
  return { title: artisan ? `${artisan.name} — ArtisanAI` : 'Artisan — ArtisanAI' };
}

export default function ArtisanProfilePage({ params }) {
  const artisan = getArtisan(params.id);
  if (!artisan) notFound();
  const artisanProducts = getProductsByArtisan(artisan.id);

  return (
    <div>
      <div className="relative h-[42vh] min-h-[280px]">
        <Image src={artisan.cover} alt={artisan.region} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brown/40" />
      </div>

      <div className="container-page -mt-20 relative pb-16">
        <div className="bg-cream border hairline rounded-sm p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-cream -mt-16 sm:-mt-24 shrink-0 shadow-md">
            <Image src={artisan.image} alt={artisan.name} fill sizes="112px" className="object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl sm:text-4xl text-brown">{artisan.name}</h1>
            <p className="text-terracotta mt-1">{artisan.craft}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-brown/60">
              <span className="flex items-center gap-1"><MapPin size={13} /> {artisan.region}</span>
              <span className="flex items-center gap-1"><Star size={13} className="fill-gold text-gold" /> {artisan.rating}</span>
              <span>{artisan.years} years of practice</span>
            </div>
            <p className="font-display italic text-lg text-brown/80 mt-5 max-w-lg leading-snug">
              "{artisan.bio}"
            </p>
          </div>
          <FollowButton />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          <div>
            <p className="text-terracotta text-sm mb-2">Her Story</p>
            <h2 className="font-display text-2xl text-brown mb-4">A craft carried through generations</h2>
            <p className="text-brown/65 leading-relaxed">{artisan.story}</p>
          </div>
          <div>
            <p className="text-terracotta text-sm mb-2">Her Craft</p>
            <h2 className="font-display text-2xl text-brown mb-4">How the work comes together</h2>
            <p className="text-brown/65 leading-relaxed">{artisan.process}</p>
          </div>
        </div>

        {artisanProducts.length > 0 && (
          <div className="mt-16 pt-14 border-t hairline">
            <h2 className="font-display text-2xl sm:text-3xl text-brown mb-8">
              Products by {artisan.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
              {artisanProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 pt-10 border-t hairline text-center">
          <Link href="/artisans" className="text-sm text-terracotta hover:underline underline-offset-4">
            ← Back to all artisans
          </Link>
        </div>
      </div>
    </div>
  );
}
