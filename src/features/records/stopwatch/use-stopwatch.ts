'use client';

import useScreenWakeLock from '@/lib/hooks/use-screen-wake-lock';
import { getElapsedTime } from '@/lib/utils/time';
import { useRef, useState } from 'react';

export enum TimerState {
  OFF = 'OFF',
  ON = 'ON',
  PAUSED = 'PAUSED',
}

const useStopwatch = (onFinish: (time: number) => void) => {
  const { wakeLockRelease, wakeLockRequest } = useScreenWakeLock();
  const [elapsedTime, setElapsedTime] = useState(0);
  const cumulativeTime = useRef<number>(0);
  const startDate = useRef<Date>(new Date());
  const [timerState, setTimerState] = useState<TimerState>(TimerState.OFF);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const clearIntervalTimer = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const onStart = () => {
    void wakeLockRequest();

    if (timerState === TimerState.OFF) {
      setElapsedTime(0);
    }

    startDate.current = new Date();

    clearIntervalTimer();

    intervalId.current = setInterval(() => {
      const timeGoneBy = getElapsedTime(
        new Date(),
        startDate.current,
        cumulativeTime.current
      );
      setElapsedTime(timeGoneBy);
    }, 40);

    setTimerState(TimerState.ON);
  };

  const onPause = () => {
    void wakeLockRelease();

    clearIntervalTimer();
    const now = new Date();
    const timeTillNow = getElapsedTime(
      now,
      startDate.current,
      cumulativeTime.current
    );

    cumulativeTime.current = timeTillNow;

    setElapsedTime(timeTillNow);
    setTimerState(TimerState.PAUSED);
  };

  const onStop = () => {
    void wakeLockRelease();

    if (timerState === TimerState.OFF) {
      return;
    }

    const now = new Date();
    let endTime: number;

    if (intervalId.current) {
      clearIntervalTimer();
    }

    if (timerState === TimerState.PAUSED) {
      endTime = elapsedTime;
    } else {
      endTime = getElapsedTime(now, startDate.current, cumulativeTime.current);
    }

    setElapsedTime(endTime);
    setTimerState(TimerState.OFF);
    onFinish(endTime);
  };

  const onReset = () => {
    void wakeLockRelease();
    clearIntervalTimer();

    setElapsedTime(0);
    cumulativeTime.current = 0;

    setTimerState(TimerState.OFF);
  };

  return {
    onStart,
    onStop,
    onPause,
    onReset,
    elapsedTime,
    timerState,
  };
};

export default useStopwatch;
