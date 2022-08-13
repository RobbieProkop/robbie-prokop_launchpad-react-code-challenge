import axios from "axios";

const API_URL = "https://api.zippopotam.us/us/";
// const API_URL = "https://api.zippopotam.us/"

const getAllPostal = async (postalCode) => {
  const { data } = await axios.get(API_URL + postalCode);
  return data;
};

const postalService = {
  getAllPostal,
};

export default postalService;
