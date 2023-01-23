import axios from "axios";

type ResponseValidateSnipcart = {
  status: string;
};

const getSnipcartValidation = async (
  token: string,
): Promise<ResponseValidateSnipcart> => {
  const { data } = await axios.get<ResponseValidateSnipcart>(
    `https://app.snipcart.com/api/requestvalidation/${token}`,
  );
  return data;
};

export default getSnipcartValidation;
