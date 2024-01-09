import { getElapsedTime } from '../time';

describe('getElapsedTime', () => {
  const testCases = [
    // recent date > older date
    {
      description: 'Recent date > older date',
      recentDate: new Date(2023, 12, 10, 6),
      olderDate: new Date(2023, 12, 10, 5),
      cumulativeTime: 0,
      expected: 3600000,
    },
    // 0 cumulative time
    // [new Date(2023, 12, 6), new Date(2023, 12, 10, 5), 100, 100],

    // recent date = older date + 0 cumulative
    // recent date = older + cumulative
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
