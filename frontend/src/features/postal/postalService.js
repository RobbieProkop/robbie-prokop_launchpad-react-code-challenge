import axios from "axios";

const API_URL = "https://api.zippopotam.us/us/";
// const API_URL = "https://api.zippopotam.us/";

const getPostalInfo = async (postalCode) => {
  const { data } = await axios.get(API_URL + postalCode);
  // const { data } = await axios.get(`${API_URL}${country}/${postalCode}`);
  return data;
};

const postalService = {
  getPostalInfo,
};

export default postalService;
