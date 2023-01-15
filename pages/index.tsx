import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import axios from "axios";
import { NextPage } from "next";

interface Products {
  products: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }[];
}

const Home: NextPage<Products> = ({ products }) => {
  return (
    <Layout>
      <div className=" grid grid-cols-4 gap-8">
        <article className="flex w-full flex-col items-start gap-4 rounded-md border border-slate-900 border-opacity-25 bg-slate-100 bg-opacity-20 p-4 transition-all duration-300 hover:bg-opacity-10">
          <h3 className="w-full text-3xl font-bold text-slate-900">
            <Balancer>Product Title</Balancer>
          </h3>
          <p className=" text-slate-900 text-opacity-80">
            <Balancer>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias recusandae sapiente nulla porro sit quos nam, totam illo
              minus saepe!
            </Balancer>
          </p>
          <Link
            href="/jersey-jeans"
            className="rounded-sm bg-slate-50 py-2 px-8"
          >
            Get Product
          </Link>
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  //const products = await axios.get('directus_instance_address')
  return {
    props: { products: null },
  };
}
