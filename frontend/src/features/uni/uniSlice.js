import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uniService from "./uniService";

const initialState = {
  unis: [],
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

// //Get index of uni in unis
// export const getuniIndex = (state) => {
//   return state.university.unis.in
// }

//Get all Universities
export const getUnis = createAsyncThunk("uni/getAll", async (_, thunkAPI) => {
  try {
    return await uniService.getUnis();
  } catch (error) {
    const message =
      error.response.data.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const uniSlice = createSlice({
  name: "uni",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUnis.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        console.log("get unis action", action.payload);
        state.unis = action.payload;
      });
  },
});

export const { reset } = uniSlice.actions;
export default uniSlice.reducer;
