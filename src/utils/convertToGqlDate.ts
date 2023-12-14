import formatRFC3339 from 'date-fns/formatRFC3339';

export const convertToGqlDate = (date: Date) => {
  // 2018-11-06T00:52:01.520Z
  return formatRFC3339(date, { fractionDigits: 3 });
};
