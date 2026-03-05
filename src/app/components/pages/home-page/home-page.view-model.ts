import { HomePageProps } from './home-page.types';
import { NavigationService } from '@domain/services';
import { useCallback } from 'react';

function useHomePageViewModel({}: HomePageProps) {
  const handleViewRepo = useCallback(() => {
    NavigationService.openExternal('https://github.com/luciancaetano/startercraft');
  }, []);

  return {
    handleViewRepo,
  };
}

export default useHomePageViewModel;
