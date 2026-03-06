import { renderHook } from '@testing-library/react';
import useBlinkButtonViewModel from './blink-button.view-model';

describe('useBlinkButtonViewModel', () => {
  it('returns an empty object', () => {
    const { result } = renderHook(() => useBlinkButtonViewModel({}));
    expect(result.current).toEqual({});
  });
});
