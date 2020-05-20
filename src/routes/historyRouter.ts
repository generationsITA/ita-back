import express from 'express';

import { getHistory } from '../controllers';
import { historyFilterParams } from '../middlewares';

const historyRouter = express.Router();

historyRouter.route('/').get(historyFilterParams, getHistory);

export default historyRouter;
