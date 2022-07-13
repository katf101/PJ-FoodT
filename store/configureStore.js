import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers";

const isDev = process.env.NODE_ENV === "development";

const createStore = () => {
  // 미들웨어

  // 루트 리듀서
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: isDev,
});

export default wrapper;
