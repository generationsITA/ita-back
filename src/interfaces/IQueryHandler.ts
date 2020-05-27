import * as e from '../helpers';
import IHistoryOptions from './IHistoryOptions';

type QueryHandler = (
  value: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  key: e.DefaultFilterKeys | e.DateFilterKeys | e.PaginationFilterKeys
) => IHistoryOptions;

interface IQueryHandler {
  [e.FilterTypes.default]: QueryHandler;
  [e.FilterTypes.date]: QueryHandler;
  [e.FilterTypes.pagination]: QueryHandler;
}

export default IQueryHandler;
