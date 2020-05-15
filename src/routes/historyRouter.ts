import express from 'express';

import { getHistory } from '../controllers';
import { historyPagParams } from '../middlewares';

const historyRouter = express.Router();

historyRouter.route('/').get(historyPagParams, getHistory);

export default historyRouter;
