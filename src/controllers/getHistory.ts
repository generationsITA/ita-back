import { Response, NextFunction } from 'express';

import { getAllHistory } from '../services';
import { IHistoryRec, IRequest } from '../interfaces';

const getHistory = async (
  req: IRequest,
  res: Response<IHistoryRec[]>,
  next: NextFunction
) => {
  try {
    const { page, perPage } = req.locals;

    const history = await getAllHistory(page, perPage);

    res.json(history);
  } catch (error) {
    next(error);
  }
};

export default getHistory;
