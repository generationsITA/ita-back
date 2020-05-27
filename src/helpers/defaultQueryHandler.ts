import { DefaultFilterKeys } from '../helpers';
import { IHistoryOptions } from '../interfaces';

const defaultQueryHandler = (
  value: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  key: DefaultFilterKeys
) => {
  const dbQueryOptions: IHistoryOptions = { filters: {} };

  if (value) {
    dbQueryOptions.filters[key] = value.toString();
  }

  return dbQueryOptions;
};

export default defaultQueryHandler;
