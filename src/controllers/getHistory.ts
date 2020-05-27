import { Response, NextFunction } from 'express';

import { findHistory } from '../services';
import { IHistoryRec, IRequest } from '../interfaces';

const getHistory = async (
  req: IRequest,
  res: Response<IHistoryRec[]>,
  next: NextFunction
) => {
  try {
    const history = await findHistory(req.locals);

    req.locals = null;

    res.json(history);
    res.status(200);
  } catch (error) {
    next(error);
  }
};

export default getHistory;
