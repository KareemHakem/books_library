import { type } from "./type";
import { axios } from "../../apis/axios";

export const getBooks =
  (
    startIndex = 0,
    keyword = "js",
    filter = "full",
    orderBy = "newest",
    dataResults = 40
  ) =>
  async (dispatch) => {
    dispatch({ type: type.GET_BOOKS_REQUEST });
    try {
      const { data } = await axios.get(
        `?q=${keyword}+terms&key=AIzaSyB7A0ZR20nfj9p0scrTvL99PRFbPUpxWBM&startindex=${startIndex}&maxResults=${dataResults}&filter=${filter}&orderBy=${orderBy}`
      );
      console.log(data);
      dispatch({ type: type.GET_BOOKS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.GET_BOOKS_ERROR, payload: err });
    }
  };
