'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { LaunchModal } from './LaunchModal';

type LaunchContextValue = {
  open: () => void;
};

const LaunchContext = createContext<LaunchContextValue | null>(null);

export function LaunchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <LaunchContext.Provider value={value}>
      {children}
      {isOpen ? <LaunchModal onClose={close} /> : null}
    </LaunchContext.Provider>
  );
}

export function useLaunchModal(): LaunchContextValue {
  const context = useContext(LaunchContext);
  if (!context) {
    throw new Error('useLaunchModal must be used inside LaunchProvider');
  }
  return context;
}
