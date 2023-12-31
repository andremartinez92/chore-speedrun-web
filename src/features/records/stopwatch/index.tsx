'use client';

import { Button } from '@/features/ui/button';
import {
  GetChoreRecordsDocument,
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

const Stopwatch = ({ choreId }: { choreId: string }) => {
  const [createRecord] = useCreateRecordMutation({
    refetchQueries: [GetChoreRecordsDocument],
  });

  const { elapsedTime, onStart, onPause, onReset, onStop, timerState } =
    useStopwatch((time: number) =>
      createRecord({ variables: { choreId, time: time.toString() } })
    );

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="text-3xl">{displayTime(elapsedTime)}</div>
      <div className="grid grid-cols-3 gap-4">
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
