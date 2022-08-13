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

export const getPostalInfo = createAsyncThunk(
  "postal/getAll",
  async (postalCode, thunkAPI) => {
    try {
      return await postalService.getPostalInfo(postalCode);
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
  reducers: {
    setCurrentPostal(state, action) {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostalInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getPostalInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.postals = action.payload;
      })
      .addCase(getPostalInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = false;
        state.isError = true;
        console.log("getPostalInfo error", action.payload);
        state.message = action.payload;
      });
  },
});

export const { setCurrentPostal } = postalSlice.actions;

export default postalSlice.reducer;
