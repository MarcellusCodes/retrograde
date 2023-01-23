import { apiClient } from "@/api/axios";

const getProductsById = async (ids: string) => {
  const { data } = await apiClient.get(
    `items/products?fields=id,name,slug,price,description,image,pieces,status&filter[id][_in]=${ids}`,
  );
  return data;
};

export default getProductsById;
