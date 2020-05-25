import { DateFilterKeys, IHistoryOptions } from '../interfaces';

const dateQueryHandler = (
  value: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  key: DateFilterKeys
) => {
  const dbQueryOptions: IHistoryOptions = { filters: {} };

  if (value) {
    const types = {
      [DateFilterKeys.startDate]: '$gte',
      [DateFilterKeys.endDate]: '$lte',
    };

    const parsedDate = new Date(value.toString());

    if (!isNaN(Number(parsedDate))) {
      const prop = types[key];

      dbQueryOptions.filters.date = { [prop]: parsedDate };
    }
  }

  return dbQueryOptions;
};

export default dateQueryHandler;
