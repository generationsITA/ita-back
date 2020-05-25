import FilterTypes from './FilterTypes';
import DateFilterKeys from './DateFilterKeys';
import IHistoryOptions from './IHistoryOptions';
import DefaultFilterKeys from './DefaultFilterKeys';
import PaginationFilterKeys from './PaginationFilterKeys';

type QueryHandler = (
  value: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  key: DefaultFilterKeys | DateFilterKeys | PaginationFilterKeys
) => IHistoryOptions;

interface IQueryHandler {
  [FilterTypes.default]: QueryHandler;
  [FilterTypes.date]: QueryHandler;
  [FilterTypes.pagination]: QueryHandler;
}

export default IQueryHandler;
