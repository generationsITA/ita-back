import IHistoryDate from './IHistoryDate';

interface IHistoryFilters {
  room?: string;
  user?: string;
  ip?: string;
  date?: IHistoryDate;
}

export default IHistoryFilters;
