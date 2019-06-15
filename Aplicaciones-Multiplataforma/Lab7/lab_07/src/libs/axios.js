import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.43.252:8080'
});

export default instance;