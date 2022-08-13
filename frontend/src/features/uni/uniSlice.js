import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uniService from "./uniService";

const initialState = {
  unis: [],
  countries: [],
  currentCountry: "Canada",
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

//Get all Universities
export const getUnis = createAsyncThunk(
  "uni/getAll",
  async (country, thunkAPI) => {
    try {
      return await uniService.getUnis(country);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get country list
export const getCountries = createAsyncThunk(
  "country/getAll",
  async (_, thunkAPI) => {
    try {
      return await uniService.getCountries();
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
      })
      .addCase(getUnis.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("getUnis error", action.payload);
        state.message = action.payload;
      })
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        const sorted = action.payload.data?.sort((a, b) => {
          let na = a.name.toLowerCase();
          let nb = b.name.toLowerCase();
          if (na < nb) return -1;
          if (na > nb) return 1;
          return 0;
        });
        // state.currentCountry =
        console.log("getCountries action", action.payload);
        state.countries = sorted;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("getCountries error", action.payload);
        state.message = action.payload;
      });
  },
});

export const { reset } = uniSlice.actions;
export default uniSlice.reducer;
