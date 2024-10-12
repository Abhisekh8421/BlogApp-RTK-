import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.js";
import blogReducer from "./slices/BlogSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogReducer,
  },
});

export default store;
