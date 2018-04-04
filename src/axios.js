import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:3004`,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = `TestToken`;
    config.headers.Authorization = `bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });

export default axiosInstance;
