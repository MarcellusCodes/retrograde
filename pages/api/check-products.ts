import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { comparePieces } from "@/utils/index";
import { getProducts } from "@/api/queries";
import { updateProductPieces } from "@/api/mutations";
import { Product } from "@/types/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const products = await getProducts();

  products.data.forEach(async (product: Product) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(product.url);
    const productDiv = await page.$(".product-quantity-tip");
    const productText = await page.evaluate(
      (productDiv) => productDiv?.textContent,
      productDiv,
    );

    const formattedProductQuantity = parseInt(
      productText?.split(/(\s+)/)[0] as string,
      10,
    );
    const pieces = comparePieces(formattedProductQuantity);

    await updateProductPieces(product.id, pieces);
    await browser.close();
  });

  res.status(200).json({ response: "success" });
}
