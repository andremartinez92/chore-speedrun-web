'use client';

import { Button } from '@/features/ui/button';
import {
  GetEventRecordsDocument,
  useCreateRecordMutation,
} from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import useStopwatch, { TimerState } from './use-stopwatch';

const TimerButton = ({
  onStart,
  onPause,
  isRunning,
}: {
  onStart: () => void;
  onPause: () => void;
  isRunning: boolean;
}) => {
  if (isRunning) {
    return <Button onClick={onPause}>Pause</Button>;
  }
  return <Button onClick={onStart}>Start</Button>;
};

const Stopwatch = ({ eventId }: { eventId: string }) => {
  const [createRecord] = useCreateRecordMutation({
    refetchQueries: [GetEventRecordsDocument],
  });

  const { elapsedTime, onStart, onPause, onReset, onStop, timerState } =
    useStopwatch((time: number) =>
      createRecord({ variables: { eventId, time: time.toString() } })
    );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-9xl">{displayTime(elapsedTime)}</div>
      <div>
        <TimerButton
          onStart={onStart}
          onPause={onPause}
          isRunning={timerState === TimerState.ON}
        />
        <Button onClick={onReset}>Reset</Button>
        <Button onClick={onStop}>Stop</Button>
      </div>
    </div>
  );
};

export default Stopwatch;
