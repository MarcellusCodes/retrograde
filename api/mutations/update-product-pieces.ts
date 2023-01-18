import { apiClient } from "@/api/axios";

const updateProductPieces = async (id: string, pieces: number) => {
  const { data } = await apiClient.patch(`items/products/${id}`, {
    pieces: pieces,
  });
  return data;
};

export default updateProductPieces;
