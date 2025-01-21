import DefaultApi from 'apis/restful';
import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

const fetcher = (config: AxiosRequestConfig<any>) =>
  axios.request(config).then(res => res.data);

export default fetcher;



const openApiAxios = axios.create({
  baseURL: process.env.DEFAULT_API,
});

export const openFetcher = async (path: string) => {
  const response = await openApiAxios.get(path);
  return response.data; // Return the data part of the response
};

// Fetcher for protected routes
export const protectedFetcher = async (path: string) => {
  const response = await openApiAxios.get(path);
  return response.data; // Return the data part of the response
};

// SWR hook for open fetcher
export const useOpenFetcher = (pathname: string) => {
  const { data, error } = useSWR(pathname, openFetcher);
  return {
    data: data || {}, // Use empty object if no data
    isLoading: !error && !data,
    isError: error,
  };
};

// SWR hook for protected fetcher
export const useProtectedFetcher = (pathname: string) => {
  const { data, error } = useSWR(pathname, protectedFetcher);
  return {
    data: data || {}, // Use empty object if no data
    isLoading: !error && !data,
    isError: error,
  };
};