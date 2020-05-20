import { History } from '../models';
import { IHistoryOptions } from '../interfaces';

const getAllHistory = async (options: IHistoryOptions) => {
  const { filters, page, perPage } = options;

  const skipPagesAmount = perPage * (page - 1);

  const history = await History.find()
    .where(filters)
    .sort('-date')
    .skip(skipPagesAmount)
    .limit(perPage);

  return history;
};

export default getAllHistory;
