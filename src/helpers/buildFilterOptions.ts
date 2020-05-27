import merge from 'lodash.merge';

import { IHistoryOptions, IFilterParam, IQueryHandler } from '../interfaces';

const buildFilterOptions = (
  query: qs.ParsedQs,
  queryHandler: IQueryHandler,
  params: IFilterParam[]
) => {
  const dbQueryOptions: IHistoryOptions = {};

  params.forEach(param => {
    const { key, type } = param;

    const value = query[key];

    const dbQueryOption = queryHandler[type](value, key);

    merge(dbQueryOptions, dbQueryOption);
  });

  return dbQueryOptions;
};

export default buildFilterOptions;
