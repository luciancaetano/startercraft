import { BlinkButtonProps } from './blink-button.types';
import clsx from 'clsx';
import React from 'react';

function BlinkButton(props: BlinkButtonProps) {
  const { children, className, testingID, style, onClick, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={onClick}
      className={clsx(
        'px-6',
        'py-3',
        'text-white',
        'cursor-pointer',
        'rounded-lg',
        'transition',
        'duration-500',
        'ease-in-out',
        'hover:brightness-150',
        'bg-gradient-to-r',
        'from-purple-500',
        'to-blue-500',
        'hover:from-blue-500',
        'hover:to-purple-500',
        className,
      )}
      data-testid={testingID}
      style={style}
    >
      {children}
    </button>
  );
}

export default React.memo(BlinkButton);
