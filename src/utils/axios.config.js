import axios from "axios";
let URL;
switch (process.env.REACT_APP_ENV) {
    case 'development':
        URL = 'http://localhost:5000';
        break;
    case 'production':
        URL = 'https://itsComing.com';
        break;
    default:
        URL = 'http://localhost:5000';
}
const instance = axios.create({
    baseURL: URL
});

export default instance;