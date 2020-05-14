import { Request, Response, NextFunction } from 'express';

import { IHistoryRec } from '../interfaces';
import { getAllHistory } from '../services';

const getHistory = async (
  req: Request,
  res: Response<IHistoryRec[]>,
  next: NextFunction
) => {
  try {
    const history = await getAllHistory();

    res.json(history);
  } catch (error) {
    next(error);
  }
};

export default getHistory;
