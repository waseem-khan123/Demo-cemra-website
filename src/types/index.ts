export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: {
    resolution?: string;
    lens?: string;
    nightVision?: string;
    weatherproof?: string;
    connectivity?: string;
    channels?: string;
    storage?: string;
    warranty?: string;
  };
  isFeatured?: boolean;
  isNew?: boolean;
  stockStatus: 'In Stock' | 'Limited Stock' | 'Order on Request';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  iconName: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  bestFor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}
