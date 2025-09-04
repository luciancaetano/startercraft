import { MainLayoutProps } from './main-layout.types';
import { useAuth } from '@components/providers/auth-provider';
import { useTranslation } from '@lib/i18n';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useMainLayoutViewModel({}: MainLayoutProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleGoToHomeClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return {
    isAuthenticated,
    user,
    t,
    handleGoToHomeClick,
  };
}

export default useMainLayoutViewModel;
