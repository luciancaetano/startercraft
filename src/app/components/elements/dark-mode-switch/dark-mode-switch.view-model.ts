import { DarkModeSwitchProps } from './dark-mode-switch.types';
import { ColorModeService } from '@domain/services';
import { useCallback, useEffect, useState } from 'react';

function useDarkModeSwitchViewModel({}: DarkModeSwitchProps) {
  const [colorMode, setColorMode] = useState(() => ColorModeService.resolvePreference().mode);

  const switchColorMode = useCallback(() => {
    setColorMode((current) => {
      const next = ColorModeService.toggle(current);
      ColorModeService.savePreference(next);
      return next;
    });
  }, []);

  useEffect(() => {
    ColorModeService.applyToDocument(colorMode);
  }, [colorMode]);

  return {
    colorMode,
    switchColorMode,
  };
}

export default useDarkModeSwitchViewModel;
