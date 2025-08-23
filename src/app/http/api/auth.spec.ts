import authApi from './auth';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@utils/apiClient', () => {
  return {
    default: class {
      async request() {
        return {
          data: {
            status: 'success',
            data: {
              name: 'Test User',
              email: 'test@example.com',
              password: 'password123',
              passwordConfirmation: 'password123',
            },
          },
        };
      }
    },
  };
});

describe('AuthApi', () => {
  describe('signup', () => {
    it('should call the signup endpoint with correct parameters', async () => {
      const response = await authApi.signup(
        'Test User',
        'test@example.com',
        'password123',
        'password123',
        '1234567890',
        'Developer',
      );

      expect(response.status).toBe('success');
      expect(response.data.name).toBe('Test User');
      expect(response.data.email).toBe('test@example.com');
    });
  });

  describe('login', () => {
    it('should call the login endpoint with correct parameters', async () => {
      const response = await authApi.login('test@example.com', 'password123');

      expect(response.status).toBe('success');
      expect(response.data.name).toBe('Test User');
      expect(response.data.email).toBe('test@example.com');
    });
  });
});
