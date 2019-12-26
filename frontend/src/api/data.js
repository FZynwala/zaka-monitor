import axios from 'axios';

const herokuURL = 'https://young-ocean-79520.herokuapp.com/';
const localhost = 'http://localhost:8000';

export default axios.create({
    baseURL: herokuURL
});