import { useAuth } from './index';
import { renderHook, act } from '@lib/tests';

describe('AuthProvider Component and useAuth hook', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current).toBeDefined();
  });

  it('should login', () => {
    const { result } = renderHook(() => useAuth(), {});

    act(() => {
      result.current.authenticate('token', {
        email: 'user@email.com',
        id: '1',
        name: 'User',
      });
    });

    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should logout', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.signout();
    });

    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should validate name', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.authenticate('token', {
        email: 'user@email.com',
        id: '1',
        name: 'User',
      });
    });

    expect(result.current.user?.name).toBe('User');
  });
});
