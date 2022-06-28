import { axios } from "../../axios/";

export const getBook = async (id) => {
  const { data } = await axios.get(`/${id}`);
  return data;
};
