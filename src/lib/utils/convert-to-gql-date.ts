import { formatRFC3339 } from 'date-fns';

export const convertToGqlDate = (date: Date) => {
  // 2018-11-06T00:52:01.520Zw
  return formatRFC3339(date, { fractionDigits: 3 });
};
