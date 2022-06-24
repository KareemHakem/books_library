import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import books from "./books/reducer";

const persistConfig = {
  key: "KEY-1",
  storage,
  whiteList: [],
  blackList: [],
};

const rootReducer = combineReducers({
  books,
});

export default persistReducer(persistConfig, rootReducer);
