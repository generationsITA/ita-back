import { Request } from 'express';

interface IRequest extends Request {
  locals: { page: number; perPage: number };
}

export default IRequest;
