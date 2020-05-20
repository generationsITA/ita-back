import IHistoryDate from './IHistoryDate';

interface IHistoryFilters {
  room?: string;
  name?: string;
  adress?: string;
  date?: IHistoryDate;
}

export default IHistoryFilters;
