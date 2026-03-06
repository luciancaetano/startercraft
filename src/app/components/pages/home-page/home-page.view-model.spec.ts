import { renderHook, act } from '@testing-library/react';
import useHomePageViewModel from './home-page.view-model';
import { NavigationService } from '@domain/services';

vi.mock('@domain/services', () => ({
  NavigationService: {
    openExternal: vi.fn(),
  },
}));

describe('useHomePageViewModel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns handleViewRepo function', () => {
    const { result } = renderHook(() => useHomePageViewModel({}));
    expect(typeof result.current.handleViewRepo).toBe('function');
  });

  it('opens the repo URL when handleViewRepo is called', () => {
    const { result } = renderHook(() => useHomePageViewModel({}));

    act(() => {
      result.current.handleViewRepo();
    });

    expect(NavigationService.openExternal).toHaveBeenCalledWith(
      'https://github.com/luciancaetano/startercraft',
    );
  });
});
