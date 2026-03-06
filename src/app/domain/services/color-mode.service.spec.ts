import { ColorModeService } from './color-mode.service';

describe('ColorModeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove('dark');
    document.body.removeAttribute('data-theme');
  });

  describe('toggle', () => {
    it('returns light when current is dark', () => {
      expect(ColorModeService.toggle('dark')).toBe('light');
    });

    it('returns dark when current is light', () => {
      expect(ColorModeService.toggle('light')).toBe('dark');
    });
  });

  describe('getSavedPreference', () => {
    it('returns null when nothing is stored', () => {
      expect(ColorModeService.getSavedPreference()).toBeNull();
    });

    it('returns dark when dark is stored', () => {
      localStorage.setItem('app-color-mode', 'dark');
      expect(ColorModeService.getSavedPreference()).toBe('dark');
    });

    it('returns light when light is stored', () => {
      localStorage.setItem('app-color-mode', 'light');
      expect(ColorModeService.getSavedPreference()).toBe('light');
    });

    it('returns null for invalid stored value', () => {
      localStorage.setItem('app-color-mode', 'invalid');
      expect(ColorModeService.getSavedPreference()).toBeNull();
    });
  });

  describe('resolvePreference', () => {
    it('returns saved preference with user source', () => {
      localStorage.setItem('app-color-mode', 'dark');

      const result = ColorModeService.resolvePreference();

      expect(result).toEqual({ mode: 'dark', source: 'user' });
    });

    it('falls back to system preference when nothing saved', () => {
      const result = ColorModeService.resolvePreference();

      expect(result.source).toBe('system');
      expect([ 'dark', 'light' ]).toContain(result.mode);
    });
  });

  describe('savePreference', () => {
    it('saves mode to localStorage', () => {
      ColorModeService.savePreference('dark');

      expect(localStorage.getItem('app-color-mode')).toBe('dark');
    });
  });

  describe('applyToDocument', () => {
    it('adds dark class and data-theme for dark mode', () => {
      ColorModeService.applyToDocument('dark');

      expect(document.body.classList.contains('dark')).toBe(true);
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });

    it('removes dark class for light mode', () => {
      document.body.classList.add('dark');

      ColorModeService.applyToDocument('light');

      expect(document.body.classList.contains('dark')).toBe(false);
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });
  });

  describe('getSystemPreference', () => {
    it('returns a valid color mode', () => {
      const result = ColorModeService.getSystemPreference();
      expect([ 'dark', 'light' ]).toContain(result);
    });
  });
});
