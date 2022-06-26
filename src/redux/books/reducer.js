import { type } from "./type";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const booksApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_BOOKS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_BOOKS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_BOOKS_ERROR:
      return {
        data: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default booksApiReducer;
