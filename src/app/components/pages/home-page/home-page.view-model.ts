import { HomePageProps } from './home-page.types';
import { useTranslation } from '@lib/i18n';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useHomePageViewModel({}: HomePageProps) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleComponentsShowcaseClick = useCallback(() => {
    navigate('/theme-showcase');
  }, [navigate]);

  return {
    t,
    handleComponentsShowcaseClick,
  };
}

export default useHomePageViewModel;
