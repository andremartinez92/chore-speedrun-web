'use client';

import { useCallback, useRef } from 'react';

const useScreenWakeLock = () => {
  const wakeLock = useRef<WakeLockSentinel | null>(null);
  const isSupported = typeof window != 'undefined' && 'wakeLock' in navigator;

  const wakeLockRequest = useCallback(async () => {
    if (wakeLock.current || !isSupported) {
      return;
    }

    try {
      wakeLock.current = await navigator.wakeLock.request('screen');

      wakeLock.current.onrelease = () => {
        wakeLock.current = null;
      };
    } catch (e) {
      console.info(e);
    }
  }, [isSupported]);

  const wakeLockRelease = useCallback(async () => {
    if (!wakeLock.current || !isSupported) {
      return;
    }

    await wakeLock.current?.release();
  }, [isSupported]);

  return { wakeLockRequest, wakeLockRelease };
};

export default useScreenWakeLock;
