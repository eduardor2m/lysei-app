import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lysei.heuristus.com'
});

export default api;