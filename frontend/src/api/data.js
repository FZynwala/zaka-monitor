import axios from 'axios';

const herokuURL = 'https://morning-fjord-81682.herokuapp.com/';
const localhost = 'http://localhost:8000';

export default axios.create({
    baseURL: herokuURL
});