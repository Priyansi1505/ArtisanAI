import Image from 'next/image';
import Link from 'next/link';
import { stories, getArtisan } from '@/lib/data';

export const metadata = { title: 'Stories — ArtisanAI' };

export default function StoriesPage() {
  const [featured, ...rest] = stories;
  const featuredArtisan = getArtisan(featured.artisanId);

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="max-w-lg mb-12">
        <p className="text-terracotta text-sm mb-2">Stories</p>
        <h1 className="font-display text-4xl text-brown">Stories from the hands behind the craft</h1>
      </div>

      <Link href={`/stories/${featured.id}`} className="group grid lg:grid-cols-2 gap-8 mb-16 items-center">
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
          <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div>
          <p className="text-xs text-brown/50 mb-2">{featured.region} · {featuredArtisan?.name}</p>
          <h2 className="font-display text-3xl text-brown group-hover:text-terracotta transition-colors leading-tight">{featured.title}</h2>
          <p className="text-brown/65 mt-3 leading-relaxed max-w-md">{featured.excerpt}</p>
          <span className="inline-block mt-4 text-sm text-terracotta">Read the story →</span>
        </div>
      </Link>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((story) => {
          const artisan = getArtisan(story.artisanId);
          return (
            <Link key={story.id} href={`/stories/${story.id}`} className="group block">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                <Image src={story.image} alt={story.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs text-brown/50 mb-1.5">{story.region} · {artisan?.name}</p>
              <h3 className="font-display text-xl text-brown group-hover:text-terracotta transition-colors leading-snug">{story.title}</h3>
              <p className="text-sm text-brown/60 mt-2 leading-relaxed">{story.excerpt}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
