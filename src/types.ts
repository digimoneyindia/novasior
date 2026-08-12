export interface WallpaperItem {
  id: string;
  title: string;
  type: 'mobile' | 'desktop';
  theme: string;
  image: string;
  subtitle?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  benefits: string[];
  includedItems: string[];
  faq: { question: string; answer: string }[];
  tags: string[];
  wallpapers?: WallpaperItem[];
}
