import axios, { AxiosRequestConfig } from 'axios';

const fetcher = (config: AxiosRequestConfig<any>) =>
  axios.request(config).then(res => res.data);

export default fetcher;
