import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  describe('openExternal', () => {
    it('opens url in a new tab', () => {
      const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

      NavigationService.openExternal('https://example.com');

      expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank');

      openSpy.mockRestore();
    });
  });
});
