import { renderHook } from '@testing-library/react';
import useNotFoundPageViewModel from './not-found-page.view-model';

describe('useNotFoundPageViewModel', () => {
  it('returns an empty object', () => {
    const { result } = renderHook(() => useNotFoundPageViewModel({}));
    expect(result.current).toEqual({});
  });
});
