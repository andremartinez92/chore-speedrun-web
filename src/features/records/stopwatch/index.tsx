'use client';

import {
  GetEventRecordsDocument,
  useCreateRecordMutation,
} from '@/graphql/generated';
import { displayTime } from '@/lib/utils/time';
import { Box, Button } from '@mui/material';
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
    return (
      <Button variant="outlined" onClick={onPause}>
        Pause
      </Button>
    );
  }
  return (
    <Button variant="outlined" onClick={onStart}>
      Start
    </Button>
  );
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
    <Box className="flex flex-col items-center justify-center">
      <Box className="text-9xl">{displayTime(elapsedTime)}</Box>
      <Box>
        <TimerButton
          onStart={onStart}
          onPause={onPause}
          isRunning={timerState === TimerState.ON}
        />
        <Button variant="outlined" onClick={onReset}>
          Reset
        </Button>
        <Button variant="contained" onClick={onStop}>
          Stop
        </Button>
      </Box>
    </Box>
  );
};

export default Stopwatch;
