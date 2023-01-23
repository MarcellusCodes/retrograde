import { apiClient } from "@/api/axios";

const getProduct = async (slug: string) => {
  const { data } = await apiClient.get(
    `items/products?fields=id,name,slug,price,description,image,pieces,status&filter[slug][_eq]=${slug}`,
  );
  return data;
};

export default getProduct;
