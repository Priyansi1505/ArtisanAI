'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={() => setFollowing((v) => !v)}
      className={`text-sm px-6 py-2.5 rounded-full border transition-colors whitespace-nowrap ${
        following ? 'bg-forest text-cream border-forest' : 'border-forest text-forest hover:bg-forest hover:text-cream'
      }`}
    >
      {following ? 'Following ✓' : 'Follow Artisan'}
    </motion.button>
  );
}
