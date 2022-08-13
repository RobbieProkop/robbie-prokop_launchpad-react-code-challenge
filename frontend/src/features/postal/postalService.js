import axios from "axios";

const API_URL = "https://api.zippopotam.us/us/";
// const API_URL = "https://api.zippopotam.us/"

const getAllPostal = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

const postalService = {
  getAllPostal,
};

export default postalService;
