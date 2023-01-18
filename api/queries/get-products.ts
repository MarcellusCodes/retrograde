import { apiClient } from "@/api/axios";

const getProducts = async () => {
  const { data } = await apiClient.get(
    "items/products?fields=id,name,slug,price,description,image,pieces,status,url",
  );
  return data;
};

export default getProducts;
