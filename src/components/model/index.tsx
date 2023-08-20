export type Product = {
  id: string;
  img: string;
  alt: string;
  title: string;
  price: string;
  country: string;
  description: string;
  rating: number;
};
export type GlobalContextType = {
    products: Product[];
  };