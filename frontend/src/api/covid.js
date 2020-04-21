import axios from 'axios';

const url = "https://coronavirus-19-api.herokuapp.com/all";
const general = "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";

export default axios.create({
    baseURL: url
});