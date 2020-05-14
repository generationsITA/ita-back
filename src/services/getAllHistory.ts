import { History } from '../models';

const getAllHistory = async () => {
  const history = History.find();

  return history;
};

export default getAllHistory;
