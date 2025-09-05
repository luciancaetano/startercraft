import { NotFoundPageProps } from './not-found-page.types';
import { useTranslation } from 'react-i18next';

function useNotFoundPageViewModel({}: NotFoundPageProps) {
  const { t } = useTranslation();
  return { t };
}

export default useNotFoundPageViewModel;
