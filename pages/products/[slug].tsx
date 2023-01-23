import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getProducts, getProduct } from "@/api/queries";
import { Puzzle, PackageCheck } from "lucide-react";
import type { Product } from "@/types/index";

const Product: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <Layout>
      <div className=" grid grid-cols-4 gap-8">
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
          <button
            className="snipcart-add-item rounded-sm bg-slate-50 py-2 px-8"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-description={product.description}
            data-item-url={`/products/${product.slug}`}
            data-item-image={`https://pbmpnq0k.directus.app/assets/${product.image}`}
            data-item-name={product.name}
          >
            Add to cart
          </button>
        </article>
      </div>
    </Layout>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async (context) => {
  const productSlug = context.params?.slug as string;
  const product = await getProduct(productSlug);

  return {
    props: { product: product.data[0], key: product.data[0].id },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.data.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: "blocking" };
};
