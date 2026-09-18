import { notFound } from 'next/navigation';
import { products, getProduct, getArtisan, getRelatedProducts } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.id);
  return { title: product ? `${product.name} — ArtisanAI` : 'Product — ArtisanAI' };
}

export default function ProductDetailsPage({ params }) {
  const product = getProduct(params.id);
  if (!product) notFound();
  const artisan = getArtisan(product.artisanId);
  const related = getRelatedProducts(product);

  return <ProductDetailClient product={product} artisan={artisan} related={related} />;
}
