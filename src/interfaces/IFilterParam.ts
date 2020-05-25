import FilterTypes from './FilterTypes';
import DateFilterKeys from './DateFilterKeys';
import DefaultFilterKeys from './DefaultFilterKeys';
import PaginationFilterKeys from './PaginationFilterKeys';

interface IFilterParam {
  key: DateFilterKeys | DefaultFilterKeys | PaginationFilterKeys;
  type: FilterTypes;
}

export default IFilterParam;
