import { type } from "./type";
import { axios } from "../../apis/axios";

export const getBooks =
  (startIndex = 0, keyword, filter = "full", orderBy = "newest") =>
  async (dispatch) => {
    dispatch({ type: type.GET_BOOKS_REQUEST });
    console.log("67813657169238176239817623987");
    try {
      console.log(keyword, "keyword");
      const { data } = await axios.get("", {
        params: {
          q: `${keyword}+terms`,
          startindex: startIndex,
          filter,
          orderBy,
          key: "AIzaSyB7A0ZR20nfj9p0scrTvL99PRFbPUpxWBM",
          maxResults: 40,
        },
      });
      console.log("khegfkwfkjhfkjhwkefjhwkjef");
      dispatch({ type: type.GET_BOOKS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.GET_BOOKS_ERROR, payload: err });
    }
  };

//   https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AlzaSyB7AOZR20nf%7C9pOscrTvL99PRFbPUpxWBM&startindex=2&maxResults=20&filter=free-ebooks&orderBy=relevance
