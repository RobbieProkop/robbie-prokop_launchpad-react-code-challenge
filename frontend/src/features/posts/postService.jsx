import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";
//Create new post

const createPost = async (postData) => {
  const { data } = await axios.post(API_URL, postData);
  return data;
};

//Get all posts
const getPosts = async () => {
  const { data } = await axios.get(API_URL);
  console.log("getpost data", data);
  return data;
};

// Delete individual post
const deletePost = async (postId) => {
  const { data } = await axios.delete(API_URL + postId);
  return postId;
};

const postService = {
  createPost,
  getPosts,
  deletePost,
};

export default postService;
