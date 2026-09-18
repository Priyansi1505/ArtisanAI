'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { stories } from '@/lib/data';

export default function StoriesSection() {
  return (
    <section className="container-page py-16 lg:py-20 border-t hairline">
      <div className="flex items-end justify-between mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl text-brown">Stories from the Ground</h2>
          <p className="text-brown/60 text-sm mt-2">Real people. Authentic journeys. Inspiring stories.</p>
        </motion.div>
        <Link href="/stories" className="hidden sm:block text-sm text-terracotta hover:underline underline-offset-4">
          View all stories
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {stories.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
          >
            <Link href={`/stories/${story.id}`} className="group block">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <p className="text-[15px] leading-snug text-brown mt-3 group-hover:text-terracotta transition-colors">
                {story.title}
              </p>
              <p className="text-xs text-terracotta mt-2 inline-flex items-center gap-1">
                Read more &rarr;
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
