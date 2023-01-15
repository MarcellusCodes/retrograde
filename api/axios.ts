import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.DIRECTUS_PROJECT_URL,
  headers: {
    Authorization: `Bearer ${process.env.DIRECTUS_STATIC_TOKEN}`,
  },
});

export const apiClient = {
  get: (route: string) => axios.get(route),
};
