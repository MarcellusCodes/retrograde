export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  pieces: number;
  status: "Sold Out" | "Available";
};
