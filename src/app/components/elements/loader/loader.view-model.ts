import { LoaderProps } from './loader.types';
import { useTranslation } from '@lib/i18n';
import { useCallback, useState } from 'react';

function useLoaderViewModel({}: LoaderProps) {
  const [counter, setCounter] = useState(0);
  const { t } = useTranslation();
  const handleIncClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleIncClick,
    counter,
    t,
  };
}

export default useLoaderViewModel;
