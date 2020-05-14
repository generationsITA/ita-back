import { History } from '../models';
import { IHistory } from '../interfaces';

const addHistory = async (data: IHistory) => {
  const history = new History(data);

  const result = await history.save();

  return result;
};

export default addHistory;
