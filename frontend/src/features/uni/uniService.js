import axios from "axios";

const API_URL = "http://universities.hipolabs.com/search?country=Canada";
// const API_URL = "http://universities.hipolabs.com/search?country="

//Get all universities
const getUnis = async () => {
  const { data } = await axios.get(API_URL);
  console.log("uniService get", data);
  return data;
};

const uniService = {
  getUnis,
};
export default uniService;
