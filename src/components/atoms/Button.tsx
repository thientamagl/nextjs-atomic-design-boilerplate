import React from 'react';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLButtonElement>;

function Button({ className, ...restProps }: Props) {
  return (
    <button
      {...restProps}
      className={clsx(
        className,
        'bg-green-01 text-white-01 font-bold rounded-md px-2 py-1 hover:bg-opacity-95 transition-all ease-linear'
      )}
    />
  );
}

export default Button;
