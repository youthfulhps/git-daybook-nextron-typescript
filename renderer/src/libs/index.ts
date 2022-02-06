//Customized swr example useRequest

import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ScopedMutator } from 'swr/dist/types';
const BASE_PATH = 'https://api.github.com';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = any, Error = any>
  extends Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data;
}

const fetcher = (url: string) => axios.get(`${BASE_PATH}${url}`).then((res) => res);

export default function useRequest<Data = any, Error = any>(
  url: string,
  config?: SWRConfiguration,
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(url, fetcher, config);

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
}
