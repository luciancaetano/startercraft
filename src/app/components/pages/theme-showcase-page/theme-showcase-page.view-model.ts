import { ThemeShowcasePageProps } from './theme-showcase-page.types';
import { useCallback, useState } from 'react';

function useThemeShowcasePageViewModel({}: ThemeShowcasePageProps) {
  const [counter, setCounter] = useState(0);
  const handleIncClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleIncClick,
    counter,
  };
}

export default useThemeShowcasePageViewModel;
