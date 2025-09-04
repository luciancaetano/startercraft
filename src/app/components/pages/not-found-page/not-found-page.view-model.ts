import { NotFoundPageProps } from './not-found-page.types';
import { useTranslation } from '@lib/i18n';

function useNotFoundPageViewModel({}: NotFoundPageProps) {
  const { t } = useTranslation();

  return {
    t,
  };
}

export default useNotFoundPageViewModel;
