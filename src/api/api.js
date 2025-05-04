import axios from 'axios';

const api = axios.create({
    baseURL: 'http://0.0.0.0:8000/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;