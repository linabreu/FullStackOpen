import axios from "axios";

const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/name/`;

const getCountry = (countryName) => {
    const request = axios.get(`${baseUrl}/${countryName}`)
    return request.then(response => response.data).catch((error) => console.log(error.message));
}

export default {getCountry}