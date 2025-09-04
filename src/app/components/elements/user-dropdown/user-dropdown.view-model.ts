import { UserDropdownProps } from './user-dropdown.types';
import { useTranslation } from '@lib/i18n';

function useUserDropdownViewModel({}: UserDropdownProps) {
  const { t } = useTranslation();

  return {
    t,
  };
}

export default useUserDropdownViewModel;
