import axios from 'axios';

const url = "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=pol";
const general = "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";

export default axios.create({
    baseURL: url
});