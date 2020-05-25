import { PaginationFilterKeys, IHistoryOptions } from '../interfaces';

const paginationQueryHandler = (
  value: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  key: PaginationFilterKeys
) => {
  const dbQueryOptions: IHistoryOptions = {};

  const defaultValues = {
    [PaginationFilterKeys.page]: 1,
    [PaginationFilterKeys.perPage]: 10,
  };

  dbQueryOptions[key] = Number(value) || defaultValues[key];

  return dbQueryOptions;
};

export default paginationQueryHandler;
