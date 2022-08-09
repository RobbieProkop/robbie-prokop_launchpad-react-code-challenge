import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
