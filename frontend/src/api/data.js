import axios from 'axios';

const herokuURL = 'https://desolate-tor-57356.herokuapp.com/';
const localhost = 'http://localhost:8000';
const renderUrl = 'https://zaka-monitor-api.onrender.com';

export default axios.create({
    baseURL: localhost,
});
