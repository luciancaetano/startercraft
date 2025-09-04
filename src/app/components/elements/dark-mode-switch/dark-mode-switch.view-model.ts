import { DarkModeSwitchProps } from './dark-mode-switch.types';
import { useCallback, useEffect, useRef, useState } from 'react';

function getPreferredColorScheme(): 'dark' | 'light' {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function useDarkModeSwitchViewModel({}: DarkModeSwitchProps) {
  const [colorMode, setColorMode] = useState(getPreferredColorScheme());
  const intialized = useRef(false);

  useEffect(() => {
    const mode = window.localStorage.getItem('app-color-mode');

    if (mode && (mode === 'dark' || mode === 'light')) {
      setColorMode(mode as 'dark' | 'light');
    }
    intialized.current = true;
  }, []);

  const switchColorMode = useCallback(() => {
    setColorMode((cm) => {
      const cmode = cm === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('app-color-mode', cmode);
      return cmode;
    });
  }, []);

  useEffect(() => {
    const currentColorModeClasses = document.body.classList;

    if (colorMode === 'dark') {
      currentColorModeClasses.add('dark');
    } else {
      currentColorModeClasses.remove('dark');
    }

    document.body.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return {
    colorMode,
    switchColorMode,
  };
}

export default useDarkModeSwitchViewModel;
