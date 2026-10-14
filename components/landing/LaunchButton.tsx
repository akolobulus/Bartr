'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useLaunchModal } from './LaunchProvider';

type LaunchButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'light';
  size?: 'md' | 'sm';
};

export function LaunchButton({ children, variant = 'primary', size = 'md' }: LaunchButtonProps) {
  const { open } = useLaunchModal();

  return (
    <button
      type="button"
      className={cn('btn', variant === 'light' && 'btn-light', size === 'sm' && 'btn-sm')}
      onClick={open}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}
