import axios from 'axios';

const herokuURL = 'https://enigmatic-hamlet-94586.herokuapp.com/';
const localhost = 'http://localhost:8000';

export default axios.create({
    baseURL: herokuURL
});