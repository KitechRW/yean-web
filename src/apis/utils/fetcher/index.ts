import DefaultApi from 'apis/restful';
import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

const fetcher = (config: AxiosRequestConfig<any>) =>
  axios.request(config).then(res => res.data);

export default fetcher;

export const openFetcher = async (path: string) => {
  return DefaultApi.OpenRoute.getRoute(path);
};

export const protectedFetcher = async (path: string) => {
  return DefaultApi.GetRoute.getRoute(path);
};

export const useOpenFetcher = (pathname: string) => {
  const { data, error } = useSWR(pathname, openFetcher);
  return {
    data: data?.data || {},
    isLoading: !error && !data,
    isError: error,
  };
};

export const useProtectedFetcher = (pathname: string) => {
  const { data, error } = useSWR(pathname, protectedFetcher);
  return {
    data: data?.data || {},
    isLoading: !error && !data,
    isError: error,
  };
};

