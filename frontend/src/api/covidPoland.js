import axios from 'axios';

const url = "https://coronavirus-19-api.herokuapp.com/countries/poland";

export default axios.create({
    baseURL: url
});