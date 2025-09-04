/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse, Method, AxiosInstance } from 'axios';
export { AxiosError } from 'axios';

export interface IApiRequestConfig {
  method: Method;
  endPoint: string;
  getParams?: Record<string, any>;
  headers?: Record<string, string>;
  config?: AxiosRequestConfig;
  token?: string | null;
  tenantID?: string | null;
  body?: Object;
}

export default abstract class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 1000,
    });
  }

  public request<TR = any>({
    method,
    endPoint,
    getParams,
    headers,
    config,
    token,
    body,
    tenantID,
  }: IApiRequestConfig): Promise<AxiosResponse<TR>> {
    return this.client.request({
      method,
      url: getParams
        ? `${endPoint}?${this.toQueryString(getParams as Record<string, string>)}`
        : endPoint,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
        ...(token ? { Authorization: token ? `Bearer ${token}` : undefined } : {}),
        ...(tenantID ? { 'X-Tenant-ID': tenantID } : {}),
        ...headers,
      },
      ...config,
      ...(body ? { data: JSON.stringify(body) } : {}),
      timeout: 30000,
    });
  }

  public async get(endpoint: string): Promise<any> {
    return this.client.get(endpoint);
  }

  protected toQueryString(params: Record<string, string>): string {
    return Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

  protected get token() {
    return localStorage.getItem('token') ?? null;
  }

  protected get tenantID() {
    return localStorage.getItem('current-tenant-id') ?? null;
  }
}
