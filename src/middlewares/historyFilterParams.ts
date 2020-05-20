import isEmpty from 'lodash.isempty';
import { Response, NextFunction } from 'express';

import * as interfaces from '../interfaces';

const historyPagParamas = (
  req: interfaces.IRequest,
  res: Response<interfaces.IHistoryRec[]>,
  next: NextFunction
) => {
  let pageNum = 1;
  let perPageNum = 10;

  const { room, name, adress, startDate, endDate, page, perPage } = req.query;

  const filters: interfaces.IHistoryFilters = {};

  if (room) {
    filters.room = room.toString();
  }

  if (name) {
    filters.name = name.toString();
  }

  if (adress) {
    filters.adress = adress.toString();
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

  if (page) {
    pageNum = Number(page);
  }

  if (perPage) {
    perPageNum = Number(perPage);
  }

  req.locals = { filters, page: pageNum, perPage: perPageNum };

  next();
};

export default historyPagParamas;
