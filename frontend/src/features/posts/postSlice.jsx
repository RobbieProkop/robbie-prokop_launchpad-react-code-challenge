import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  //i'm adding an extra array here. need to remove it
  posts: [],
  postForm: false,
  isError: false,
  isLoading: false,
  isSuccessful: false,
  message: "",
};

//Get All Posts
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

//Get individual post
export const getOnePost = createAsyncThunk(
  "posts/getOne",
  async (postId, thunkAPI) => {
    try {
      return await postService.getOnePost(postId);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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

//Edit Post
export const editPost = createAsyncThunk(
  "posts/edit",
  async (postId, postData, thunkAPI) => {
    try {
      return await postService.editPost(postId, postData);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete post
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, thunkAPI) => {
    try {
      return await postService.deletePost(postId);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Select a single post by id
export const selectPostById = (state, postId) => {
  console.log(
    " select 1 ID",
    state.posts.posts[0].find((post) => post.id === postId)
  );
  return state.posts.posts[0].find((post) => post.id === postId);
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
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.posts.push(action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.posts.push(action.payload);
      })
      .addCase(editPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        //this is causing errors because i cannot actually delete a post, and no id is being sent back through action.payload
        // state.posts = state.posts.filter(
        //   (post) => post.id !== action.payload
        // );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { setToggleForm } = postSlice.actions;
export default postSlice.reducer;
