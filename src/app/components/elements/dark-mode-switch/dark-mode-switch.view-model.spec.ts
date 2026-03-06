import { renderHook, act } from '@testing-library/react';
import useDarkModeSwitchViewModel from './dark-mode-switch.view-model';
import { ColorModeService } from '@domain/services';

vi.mock('@domain/services', () => ({
  ColorModeService: {
    resolvePreference: vi.fn(() => ({ mode: 'light', source: 'system' })),
    toggle: vi.fn((current) => (current === 'dark' ? 'light' : 'dark')),
    savePreference: vi.fn(),
    applyToDocument: vi.fn(),
  },
}));

describe('useDarkModeSwitchViewModel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with resolved preference', () => {
    const { result } = renderHook(() => useDarkModeSwitchViewModel({}));

    expect(result.current.colorMode).toBe('light');
    expect(ColorModeService.applyToDocument).toHaveBeenCalledWith('light');
  });

  it('toggles color mode and saves preference', () => {
    const { result } = renderHook(() => useDarkModeSwitchViewModel({}));

    act(() => {
      result.current.switchColorMode();
    });

    expect(result.current.colorMode).toBe('dark');
    expect(ColorModeService.savePreference).toHaveBeenCalledWith('dark');
    expect(ColorModeService.applyToDocument).toHaveBeenCalledWith('dark');
  });
});
