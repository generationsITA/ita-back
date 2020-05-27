import {
  FilterTypes,
  DateFilterKeys,
  DefaultFilterKeys,
  PaginationFilterKeys,
} from '../helpers';

interface IFilterParam {
  key: DateFilterKeys | DefaultFilterKeys | PaginationFilterKeys;
  type: FilterTypes;
}

export default IFilterParam;
