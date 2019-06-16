import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.16:8080'
});

export default instance;