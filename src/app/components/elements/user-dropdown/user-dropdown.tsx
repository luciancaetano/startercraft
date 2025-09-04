import styles from './user-dropdown.module.scss';
import { UserDropdownProps } from './user-dropdown.types';
import useUserDropdownViewModel from './user-dropdown.view-model';
import userImg from '@assets/images/anonymous.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';

function UserDropdown(props: UserDropdownProps) {
  const { className, testingID } = props;

  const {} = useUserDropdownViewModel(props);

  return (
    <div
      className={clsx(
        'user-dropdown dropdown dropdown-bottom flex items-center gap-4 cursor-pointer select-none',
        styles.userDropdown,
        className,
      )}
      data-testid={testingID}
    >
      <Menu>
        <MenuButton className="flex flex-1">
          <span className="hidden text-right lg:block" role="button">
            <span className="block text-sm font-medium text-black dark:text-white">
              Lucian Caetano
            </span>
            <span className="block text-xs">Front End Developer</span>
          </span>

          <span className="h-12 w-12 rounded-full">
            <img src={userImg} alt="User Profile" />
          </span>
          <ChevronDownIcon className="hidden fill-current sm:block w-4 " />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="menu dropdown-content bg-dark rounded-md z-999 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              Item 1
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default React.memo(withResourceBundle(UserDropdown, () => import('./translations')));
