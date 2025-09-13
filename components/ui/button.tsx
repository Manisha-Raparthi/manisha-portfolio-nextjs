import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'ghost',
  size?: 'sm' | 'md' | 'icon',
  className?: string,
};

export function Button({ variant='solid', size='md', className, ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl transition outline-none focus:ring-2 ring-offset-2 ring-indigo-500 disabled:opacity-50';
  const variants = {
    solid: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900',
    ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900'
  } as const;
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    icon: 'h-9 w-9 p-0'
  } as const;
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
