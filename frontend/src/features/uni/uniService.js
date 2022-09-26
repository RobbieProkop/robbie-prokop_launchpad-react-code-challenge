import axios from "axios";

const UNI_API_URL = "https://universities.hipolabs.com/search?country=";

const COUNTRY_API_URL =
  "https://countriesnow.space/api/v0.1/countries/info?returns=none";

//Get all universities
const getUnis = async (country) => {
  const { data } = await axios.get(UNI_API_URL + country);
  return data;
};

//Get all Countries
const getCountries = async () => {
  const { data } = await axios.get(COUNTRY_API_URL);
  return data;
};

const uniService = {
  getUnis,
  getCountries,
};
export default uniService;
