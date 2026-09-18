import { Suspense } from 'react';
import AIDiscoveryClient from './AIDiscoveryClient';

export const metadata = { title: 'AI Discovery — ArtisanAI' };

export default function AIDiscoveryPage() {
  return (
    <Suspense fallback={null}>
      <AIDiscoveryClient />
    </Suspense>
  );
}
