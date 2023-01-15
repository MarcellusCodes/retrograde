import { apiClient } from "../axios";

const getProducts = async () => {
  const { data } = await apiClient.get(
    "items/products?fields=id,name,slug,price,description,image,pieces,status",
  );
  return data;
};

export default getProducts;
