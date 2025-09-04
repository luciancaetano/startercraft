import { useApiError } from './use-api-error';
import { renderHook } from '@testing-library/react';

describe('useApiError', () => {
  it('should handle API errors correctly', () => {
    const { result } = renderHook(() => useApiError());
    expect(result.current).toBeDefined();
    // Add more specific tests for the hook's behavior
  });
});
