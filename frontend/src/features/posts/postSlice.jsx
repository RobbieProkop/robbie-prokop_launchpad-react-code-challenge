import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  postForm: false,
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

//Create new Post
export const createPost = createAsyncThunk(
  "posts/create",
  async (postData, thunkAPI) => {
    try {
      return await postService.createPost(postData);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get API Posts
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return await postService.getPosts();
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setToggleForm(state) {
      state.postForm = !state.postForm;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getPosts.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getPosts.success, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccessful = true;
    //     state.posts = action.payload;
    //   })
    //   .addCase(getPosts.fail, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //   });
    //Can use this if posting to a real API
    //   .addCase(createPost.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(createPost.success, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccessful = true;
    //     state.posts.push(action.payload);
    //   })
    //   .addCase(createPost.fail, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //   });
  },
});

export const { reset, setToggleForm } = postSlice.actions;
export default postSlice.reducer;
