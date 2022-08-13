import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postalService from "./postalService";

const initialState = {
  postals: [],
  current: "",
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

export const getAllPostal = createAsyncThunk(
  "postal/getAll",
  async (_, thunkAPI) => {
    try {
      return await postalService.getAllPostal();
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postalSlice = createSlice({
  name: "postal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPostal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.postals = action.payload;
      })
      .addCase(getAllPostal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("getAllPostal error", action.payload);
        state.message = action.payload;
      });
  },
});

export default postalSlice.reducer;
