import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postForm: false,
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // reset: (state) => initialState,
    setToggleForm(state) {
      state.postForm = !state.postForm;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
