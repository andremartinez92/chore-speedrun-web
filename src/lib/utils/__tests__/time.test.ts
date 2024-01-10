import {
  displayCentiseconds,
  displayMinutes,
  displaySeconds,
  displayTime,
  getElapsedTime,
} from '../time';

describe('getElapsedTime', () => {
  const testCases = [
    {
      description: 'Recent date > older date',
      recentDate: new Date(2023, 12, 10, 6),
      olderDate: new Date(2023, 12, 10, 5),
      cumulativeTime: 0,
      expected: 3600000,
    },
    {
      description: 'Only cumulative time',
      recentDate: new Date(2023, 12, 10, 5),
      olderDate: new Date(2023, 12, 10, 5),
      cumulativeTime: 200,
      expected: 200,
    },
    {
      description: 'Older date > recent date',
      recentDate: new Date(2023, 12, 10, 5),
      olderDate: new Date(2023, 12, 10, 6),
      cumulativeTime: 0,
      expected: 0,
    },
    {
      description: 'Older date > recent date + cumulative time',
      recentDate: new Date(2023, 12, 10, 5),
      olderDate: new Date(2023, 12, 10, 6),
      cumulativeTime: 200,
      expected: 200,
    },
    {
      description: 'Recent date > older date + cumulative time',
      recentDate: new Date(2023, 12, 10, 6),
      olderDate: new Date(2023, 12, 10, 5),
      cumulativeTime: 200,
      expected: 3600200,
    },
  ];

  test.each(testCases)(
    '$description',
    ({ recentDate, olderDate, cumulativeTime, expected }) => {
      expect(getElapsedTime(recentDate, olderDate, cumulativeTime)).toEqual(
        expected
      );
    }
  );
});

describe('displayCentiseconds', () => {
  const testCases = [
    { description: 'Zero', time: 0, expected: '00' },
    { description: 'Under one centisecond (10ms)', time: 7, expected: '00' },
    { description: 'Multiple centiseconds', time: 386, expected: '38' },
    {
      description: 'Large amount of centiseconds',
      time: 38623,
      expected: '62',
    },
  ];

  test.each(testCases)('$description', ({ time, expected }) => {
    expect(displayCentiseconds(time)).toEqual(expected);
  });
});

describe('displaySeconds', () => {
  const testCases = [
    { description: 'Zero', time: 0, expected: '00' },
    { description: 'Under one second', time: 7, expected: '00' },
    { description: 'Multiple seconds', time: 3868, expected: '03' },
    {
      description: 'Large amount of seconds',
      time: 386232,
      expected: '26',
    },
  ];

  test.each(testCases)('$description', ({ time, expected }) => {
    expect(displaySeconds(time)).toEqual(expected);
  });
});

describe('displayMinutes', () => {
  const testCases = [
    { description: 'Zero', time: 0, expected: '00' },
    { description: 'Under one minute', time: 7, expected: '00' },
    { description: 'Multiple minutes', time: 386806, expected: '06' },
    {
      description: 'Large amount of minutes',
      time: 18623222,
      expected: '10',
    },
  ];

  test.each(testCases)('$description', ({ time, expected }) => {
    expect(displayMinutes(time)).toEqual(expected);
  });
});

describe('displayTime', () => {
  const testCases = [
    { description: 'Zero', time: 0, expected: '00:00:00' },
    { description: 'Under one centisecond', time: 7, expected: '00:00:00' },
    { description: 'Multiple minutes', time: 386806, expected: '06:26:80' },
    {
      description: 'Large amount of minutes',
      time: 18623222,
      expected: '10:23:22',
    },
  ];

  test.each(testCases)('$description', ({ time, expected }) => {
    expect(displayTime(time)).toEqual(expected);
  });
});
