import axios from "axios";

// const UNI_API_URL = "http://universities.hipolabs.com/search?country=Canada";
const UNI_API_URL = "http://universities.hipolabs.com/search?country=";

const COUNTRY_API_URL =
  "https://countriesnow.space/api/v0.1/countries/info?returns=none";

//Get all universities
const getUnis = async (country) => {
  const { data } = await axios.get(UNI_API_URL + country);
  // const { data } = await axios.get(UNI_API_URL);
  console.log("getUnis data", data);
  return data;
};

//Get all Countries
const getCountries = async () => {
  const { data } = await axios.get(COUNTRY_API_URL);
  console.log("getCountries data", data);
  return data;
};

const uniService = {
  getUnis,
  getCountries,
};
export default uniService;
