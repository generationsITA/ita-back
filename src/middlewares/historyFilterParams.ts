import { Response, NextFunction } from 'express';

import * as helpers from '../helpers';
import * as interfaces from '../interfaces';

const historyFilterParams = (
  req: interfaces.IRequest,
  res: Response<interfaces.IHistoryRec[]>,
  next: NextFunction
) => {
  const {
    FilterTypes,
    DefaultFilterKeys,
    DateFilterKeys,
    PaginationFilterKeys,
  } = helpers;

  const queryHandler: interfaces.IQueryHandler = {
    [FilterTypes.default]: helpers.defaultQueryHandler,
    [FilterTypes.date]: helpers.dateQueryHandler,
    [FilterTypes.pagination]: helpers.paginationQueryHandler,
  };

  const necessaryParams: interfaces.IFilterParam[] = [
    {
      key: DefaultFilterKeys.room,
      type: FilterTypes.default,
    },
    {
      key: DefaultFilterKeys.user,
      type: FilterTypes.default,
    },
    {
      key: DefaultFilterKeys.ip,
      type: FilterTypes.default,
    },
    {
      key: DateFilterKeys.startDate,
      type: FilterTypes.date,
    },
    {
      key: DateFilterKeys.endDate,
      type: FilterTypes.date,
    },
    {
      key: PaginationFilterKeys.page,
      type: FilterTypes.pagination,
    },
    {
      key: PaginationFilterKeys.perPage,
      type: FilterTypes.pagination,
    },
  ];

  req.locals = helpers.buildFilterOptions(
    req.query,
    queryHandler,
    necessaryParams
  );

  next();
};

export default historyFilterParams;
