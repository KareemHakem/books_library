import { axios } from "../../axios/";

export const getBook = async (id) => {
  const { data } = await axios.get(
    `/${id}?keyes&key=AIzaSyB7A0ZR20nfj9p0scrTvL99PRFbPUpxWBM&`
  );
  return data;
};
