export const getElapsedTime = (
  recentDate: Date,
  olderDate: Date,
  cumulativeTime: number
) => {
  if (olderDate > recentDate) {
    console.error('Recent date cannot be lower than older date.');
    return cumulativeTime;
  }

  return recentDate.valueOf() - olderDate.valueOf() + cumulativeTime;
};

export const displayCentiseconds = (time: number) => {
  const centiseconds = Math.floor((time / 10) % 100);
  // Show 01, 02, ...
  const displayText = ('0' + centiseconds).slice(-2);

  return displayText;
};

export const displaySeconds = (time: number) => {
  const seconds = Math.floor((time / 1000) % 60);

  // Show 01, 02, ...
  const displayText = ('0' + seconds).slice(-2);

  return displayText;
};

export const displayMinutes = (time: number) => {
  const minutes = Math.floor((time / 60000) % 60);

  // Show 01, 02, ...
  const displayText = ('0' + minutes).slice(-2);

  return displayText;
};

export const displayTime = (elapsedTime: number) => {
  if (!elapsedTime) return '00:00:00';

  return `${displayMinutes(elapsedTime)}:${displaySeconds(
    elapsedTime
  )}:${displayCentiseconds(elapsedTime)}`;
};
