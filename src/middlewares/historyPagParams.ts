import { Request, Response, NextFunction } from 'express';

import { IHistoryRec, IRequest } from '../interfaces';

const historyPagParamas = (
  req: IRequest,
  res: Response<IHistoryRec[]>,
  next: NextFunction
) => {
  const params = { page: 1, perPage: 10 };

  const { page, perPage } = req.query;

  if (page) {
    params.page = Number(page);
  }

  if (perPage) {
    params.perPage = Number(perPage);
  }

  req.locals = params;

  next();
};

export default historyPagParamas;
