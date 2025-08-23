import apiClient, { AxiosError } from './apiClient';
import axios, { AxiosInstance } from 'axios';
import { describe, it, expect, vi, beforeEach } from 'vitest';

class TestableAPIClient extends apiClient {
  public testToQueryString(params: Record<string, string>): string {
    return this.toQueryString(params);
  }

  public getTestToken(): string | null {
    return this.token;
  }

  public getTestTenantID(): string | null {
    return this.tenantID;
  }
}

describe('apiClient', () => {
  let mockAxios: Partial<AxiosInstance>;

  beforeEach(() => {
    mockAxios = {
      request: vi.fn(),
      get: vi.fn(),
    };
    vi.spyOn(axios, 'create').mockReturnValue(mockAxios as AxiosInstance);
  });

  it('should make a request with correct parameters', async () => {
    const client = new (class extends apiClient {})();
    const mockRequest = mockAxios.request as jest.Mock;
    mockRequest.mockResolvedValue({ data: 'response' });

    const response = await client.request({
      method: 'GET',
      endPoint: '/test',
      getParams: { key: 'value' },
      headers: { 'Custom-Header': 'HeaderValue' },
      token: 'test-token',
      tenantID: 'tenant-id',
    });

    expect(mockRequest).toHaveBeenCalledWith({
      method: 'GET',
      url: '/test?key=value',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer test-token',
        'X-Tenant-ID': 'tenant-id',
        'Custom-Header': 'HeaderValue',
      },
      timeout: 30000,
    });
    expect(response.data).toBe('response');
  });

  it('should handle GET requests correctly', async () => {
    const client = new (class extends apiClient {})();
    const mockGet = mockAxios.get as jest.Mock;
    mockGet.mockResolvedValue({ data: 'get-response' });

    const response = await client.get('/test-get');

    expect(mockGet).toHaveBeenCalledWith('/test-get');
    expect(response.data).toBe('get-response');
  });

  it('should handle errors gracefully', async () => {
    const client = new (class extends apiClient {})();
    const mockRequest = mockAxios.request as jest.Mock;
    const error = new AxiosError('Request failed');
    mockRequest.mockRejectedValue(error);

    await expect(
      client.request({
        method: 'POST',
        endPoint: '/error',
      }),
    ).rejects.toThrow('Request failed');
  });

  describe('toQueryString', () => {
    it('should convert an object to a query string', () => {
      const client = new TestableAPIClient();
      const queryString = client.testToQueryString({ key1: 'value1', key2: 'value2' });
      expect(queryString).toBe('key1=value1&key2=value2');
    });

    it('should handle empty parameters', () => {
      const client = new TestableAPIClient();
      const queryString = client.testToQueryString({});
      expect(queryString).toBe('');
    });

    it('should encode special characters', () => {
      const client = new TestableAPIClient();
      const queryString = client.testToQueryString({ key: 'value with spaces' });
      expect(queryString).toBe('key=value%20with%20spaces');
    });
  });

  describe('token getter', () => {
    it('should return the token from localStorage', () => {
      localStorage.setItem('token', 'test-token');
      const client = new TestableAPIClient();
      expect(client.getTestToken()).toBe('test-token');
    });

    it('should return null if no token is in localStorage', () => {
      localStorage.removeItem('token');
      const client = new TestableAPIClient();
      expect(client.getTestToken()).toBeNull();
    });
  });

  describe('tenantID getter', () => {
    it('should return the tenant ID from localStorage', () => {
      localStorage.setItem('current-tenant-id', 'tenant-id');
      const client = new TestableAPIClient();
      expect(client.getTestTenantID()).toBe('tenant-id');
    });

    it('should return null if no tenant ID is in localStorage', () => {
      localStorage.removeItem('current-tenant-id');
      const client = new TestableAPIClient();
      expect(client.getTestTenantID()).toBeNull();
    });
  });
});
