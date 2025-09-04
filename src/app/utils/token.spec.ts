import { getToken, setToken, clearToken } from './token';
import { describe, it, expect } from 'vitest';

describe('token utility', () => {
  it('should set and get a token correctly', () => {
    setToken('test-token');
    const token = getToken();
    expect(token).toBe('test-token');
  });

  it('should clear a token correctly', () => {
    setToken('test-token');
    clearToken();
    const token = getToken();
    expect(token).toBeNull();
  });
});
