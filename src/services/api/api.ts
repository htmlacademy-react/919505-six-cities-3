import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from '../token';
import {toast} from 'react-toastify';

type DetailedMessageType = {
  errorType: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailedMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const responseData = (error.response.data);
        const message = `${responseData.errorType}: ${responseData.message}`;

        toast.warn(message, {position: 'bottom-right'});
      }
      throw error;
    }
  );

  return api;
};
