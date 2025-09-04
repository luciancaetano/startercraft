/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from '@utils/apiClient';

export interface IRequestResponse<T = null> {
  status: string;
  data: T;
  error?: {
    message?: string;
    code?: string;
    debug?: any;
  };
}

export interface IPaginatedRequestReponse<T = null> extends Omit<IRequestResponse<T>, 'data'> {
  data: {
    nextCursor: string | null;
    prevCursor: string | null;
    results: T[];
  };
}

export type TRequestResponseError<T = null> = AxiosError<IRequestResponse<T>> | null;
