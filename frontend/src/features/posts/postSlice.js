import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  //this is adding an extra array here. need to remove it
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
  async (postData, thunkAPI) => {
    const { id } = postData;
    try {
      const res = await postService.editPost(id, postData);
      return res;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      // return thunkAPI.rejectWithValue(message);
      return postData; //used for development. not production
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
  return state.posts.posts.find((post) => post.id === postId);
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
        state.posts = action.payload;
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
        if (!action.payload?.id) {
          console.log("action payload", action.payload);
          return console.log("could not update post");
        }
        const { id } = action.payload;
        const posts = state.posts.filter((post) => post.id !== id);
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
        if (!action.payload) {
          console.log("Delete failed");
          console.log(action.payload);
          return;
        }
        //cannot delete posts from the json typicode api, only posts that I've created
        const posts = state.posts.filter((post) => post.id !== action.payload);
        state.posts = posts;
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
