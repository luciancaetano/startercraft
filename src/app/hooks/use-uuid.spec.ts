import useUUID from './use-uuid';
import { renderHook } from '@testing-library/react';

describe('useUUID', () => {
  it('should generate a unique UUID', () => {
    const { result } = renderHook(() => useUUID());
    const uuid = result.current;

    expect(uuid).toBeDefined();
    expect(typeof uuid).toBe('string');
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });

  it('should return the same UUID on re-renders', () => {
    const { result, rerender } = renderHook(() => useUUID());
    const firstUUID = result.current;

    rerender();
    const secondUUID = result.current;

    expect(firstUUID).toBe(secondUUID);
  });
});
