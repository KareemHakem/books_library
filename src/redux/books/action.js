import { type } from "./type";
import { axios } from "../../apis/axios";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: type.GET_BOOKS_REQUEST });
  try {
    const { data } = await axios.get(
      `?q=flowers+inauthor:keyes&key=AIzaSyB7A0ZR20nfj9p0scrTvL99PRFbPUpxWBM`
    );
    console.log("data boooooooooks", data);
    dispatch({ type: type.GET_BOOKS_SUCCESS, dispatch: data });
  } catch (err) {
    dispatch({ type: type.GET_BOOKS_ERROR, dispatch: err });
  }
};
