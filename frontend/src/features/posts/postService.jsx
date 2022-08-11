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
  console.log("data", data);
  return data;
};

//Create new post
const createPost = async (postData) => {
  const { data } = await axios.post(API_URL, postData);
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
  return data;
};

const postService = {
  getPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
};

export default postService;
