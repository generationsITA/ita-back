import IHistoryFilters from './IHistoryFilters';

interface IHistoryOptions {
  filters?: IHistoryFilters;
  page?: number;
  perPage?: number;
}

export default IHistoryOptions;
