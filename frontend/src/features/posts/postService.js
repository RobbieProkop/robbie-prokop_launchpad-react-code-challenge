import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

//Get all posts
const getPosts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

//Get one post
const getOnePost = async (postId) => {
  const { data } = await axios.get(API_URL + postId);
  return data;
};

//Create new post
const createPost = async (postData) => {
  console.log("expected 2", postData);
  const { data } = await axios.post(API_URL, postData);
  console.log("createPost with id", data.id);
  return data;
};

// Edit individual post
const editPost = async (postId, postData) => {
  const { data } = await axios.put(API_URL + postId, postData);
  return data;
};

// Delete individual post
const deletePost = async (postId) => {
  const { data } = await axios.delete(API_URL + postId);
  // normally we do this, but we cannot since the api only returns an empty object
  // return data;
  return postId;
};

const postService = {
  getPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
};

export default postService;
