import { HomePageProps } from './home-page.types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useHomePageViewModel({}: HomePageProps) {
  const navigate = useNavigate();

  const handleComponentsShowcaseClick = useCallback(() => {
    navigate('/theme-showcase');
  }, [navigate]);

  return {
    handleComponentsShowcaseClick,
  };
}

export default useHomePageViewModel;
