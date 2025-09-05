import { HomePageProps } from './home-page.types';
import { useCallback } from 'react';

function useHomePageViewModel({}: HomePageProps) {
  const handleViewRepo = useCallback(() => {
    window.open('https://github.com/luciancaetano/startercraft', '_blank');
  }, []);

  return {
    handleViewRepo,
  };
}

export default useHomePageViewModel;
