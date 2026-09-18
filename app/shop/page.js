import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata = { title: 'Shop Handmade — ArtisanAI' };

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopClient />
    </Suspense>
  );
}
