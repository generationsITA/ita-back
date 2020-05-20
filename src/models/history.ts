import mongoose, { Schema } from 'mongoose';

import { IHistoryRec } from '../interfaces';

const Model = mongoose.model;

const historySchema: Schema<IHistoryRec> = new Schema(
  {
    user: String,
    message: String,
    room: String,
    date: Date,
    ip: String,
  },
  { versionKey: false }
);

const History = Model<IHistoryRec>('history', historySchema);

export default History;
