import { type } from "./type";
import { axios } from "../../apis/axios";

export const getBooks =
  (pageNumber = 0, keyword = "flowers", filter = "full", orderBy = "newest") =>
  async (dispatch) => {
    dispatch({ type: type.GET_BOOKS_REQUEST });
    try {
      const { data } = await axios.get(
        `?q=${keyword}+terms&key=AIzaSyB7A0ZR20nfj9p0scrTvL99PRFbPUpxWBM&startindex=${pageNumber}&maxResults=40&filter=${filter}&orderBy=${orderBy}`
      );
      console.log(data);
      dispatch({ type: type.GET_BOOKS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.GET_BOOKS_ERROR, payload: err });
    }
  };

// ?https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AlzaSyB7AOZR20nf|9pOscrTvL99PRFbPUpxWBM&startindex=2&maxResults=20&filter=free-ebooks&orderBy=relevance
