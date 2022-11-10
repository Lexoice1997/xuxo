import axios from 'axios';
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

$authHost.interceptors.request.use((config: AxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  (config.headers as AxiosRequestHeaders).authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export { $host, $authHost };
