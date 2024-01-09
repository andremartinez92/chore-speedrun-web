import { convertToGqlDate } from '../convert-to-gql-date';

test('convert-to-gql-date', () => {
  // 18th April 2019, 03:24
  const date = new Date(2019, 3, 18, 3, 24);

  expect(convertToGqlDate(date)).toEqual('2019-04-18T03:24:00.000Z');
});
