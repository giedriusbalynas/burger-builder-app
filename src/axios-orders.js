import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-9a848.firebaseio.com/'
});

export default instance;