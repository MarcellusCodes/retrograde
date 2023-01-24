import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { comparePieces } from "@/utils/index";
import { getProductsById, getSnipcartValidation } from "@/api/queries";
import { updateProductPieces } from "@/api/mutations";
import { Product } from "@/types/index";
import { sendMail } from "@/utils/index";

type ResponseData = {
  response: string;
};

type RequestData = {
  data: {
    token: string;
    user: {
      email: string;
      billingAddress: {
        fullName: string;
      };
    };
    items: {
      name: string;
      price: number;
      quantity: 1;
      id: string;
      image: string;
    }[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  /* const { token, user, items, eventName } = req.body.content; */

  /* const validateSnipcart = await getSnipcartValidation(token);

  if (validateSnipcart.status !== "healthy") {
    return res.status(401).json({ response: "not authorized" });
  } */

  if (req.body.content.eventName === "order.completed") {
    const productIds: string = req.body.content.items
      .map((item: { id: string }) => item.id)
      .join();

    const products: { data: Product[] } = await getProductsById(productIds);

    products.data.forEach(async (product: Product) => {
      req.body.content.items.forEach(
        async (item: { id: string; quantity: number }) => {
          if (item.id === product.id) {
            const pieces = product.pieces - item.quantity;
            await updateProductPieces(product.id, pieces);
          }
        },
      );
    });

    await Promise.all(
      products.data.map(
        async (product: Product) =>
          await res.revalidate(`/products/${product.slug}`),
      ),
    );
  }
  const mail = await sendMail();

  res.status(200).json({ response: "success" });
}
