import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { NextPage } from "next";
import { getProducts } from "@/api/queries";
import { Puzzle, PackageCheck } from "lucide-react";

interface Products {
  products: {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    image: string;
    pieces: number;
    status: "Sold Out" | "Available";
  }[];
}

const Home: NextPage<Products> = ({ products }) => {
  return (
    <Layout>
      <div className=" grid grid-cols-4 gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex w-full flex-col items-start gap-4 rounded-md border border-slate-900 border-opacity-25 bg-slate-100 bg-opacity-20 p-4 transition-all duration-300 hover:bg-opacity-10"
          >
            <h3 className="w-full text-3xl font-bold text-slate-900">
              <Balancer>{product.name}</Balancer>
            </h3>
            <p className="text-slate-900 text-opacity-80">
              <Balancer>{product.description}</Balancer>
            </p>
            <ul>
              <li className="text-xl font-bold">{product.price}€</li>
              <li className="flex flex-row items-center">
                <Puzzle color="black" size={16} /> {product.pieces} left
              </li>
              <li className="flex flex-row items-center">
                <PackageCheck color="black" size={16} /> {product.status}
              </li>
            </ul>
            <Link
              href={`/products/${product.slug}`}
              className="rounded-sm bg-slate-50 py-2 px-8"
            >
              Get Product
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products: products.data },
    revalidate: 3600,
  };
}
