import { Request } from 'express';
import IHistoryFilters from './IHistoryOptions';

interface IRequest extends Request {
  locals: IHistoryFilters;
}

export default IRequest;
