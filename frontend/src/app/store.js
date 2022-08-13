import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import uniReducer from "../features/uni/uniSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    universities: uniReducer,
  },
});
