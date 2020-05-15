import { History } from '../models';

const getAllHistory = async (page: number, perPage: number) => {
  const skipPagesAmount = perPage * (page - 1);

  const history = await History.find()
    .sort('-date')
    .skip(skipPagesAmount)
    .limit(perPage);

  return history;
};

export default getAllHistory;
