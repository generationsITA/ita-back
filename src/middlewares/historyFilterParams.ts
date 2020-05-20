import isEmpty from 'lodash.isempty';
import { Response, NextFunction } from 'express';

import * as interfaces from '../interfaces';

const historyFilterParams = (
  req: interfaces.IRequest,
  res: Response<interfaces.IHistoryRec[]>,
  next: NextFunction
) => {
  const { room, user, ip, startDate, endDate, page, perPage } = req.query;

  const filters: interfaces.IHistoryFilters = {};

  if (room) {
    filters.room = room.toString();
  }

  if (user) {
    filters.user = user.toString();
  }

  if (ip) {
    filters.ip = ip.toString();
  }

  const date: interfaces.IHistoryDate = {};

  if (startDate) {
    const parsedStartDate = new Date(startDate.toString());

    if (!isNaN(Number(parsedStartDate))) {
      date.$gte = parsedStartDate;
    }
  }

  if (endDate) {
    const parsedEndDate = new Date(endDate.toString());

    if (!isNaN(Number(parsedEndDate))) {
      date.$lte = parsedEndDate;
    }
  }

  if (!isEmpty(date)) {
    filters.date = date;
  }

  const pageNum = Number(page) || 1;

  const perPageNum = Number(perPage) || 10;

  req.locals = { filters, page: pageNum, perPage: perPageNum };

  next();
};

export default historyFilterParams;
