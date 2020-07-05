import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/carlos-george/cervApp'
});

export default api;