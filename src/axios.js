import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'https://lrvl-demo.herokuapp.com/api/'
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
AxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log('response', response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
});

export default AxiosInstance;
