import axios from 'axios';

function getCountries() {
  const countryList = async () => {
    const url = 'https://api.covid19api.com/countries';
    const result = await axios.get(url);
    return result; // returns a fulfilled promise
  }
  return countryList();
};

export default getCountries;
