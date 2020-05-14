import { Document } from 'mongoose';

import IHistory from './IHistory';

interface IHistoryRec extends IHistory, Document {}

export default IHistoryRec;
