import express from 'express';

import { getHistory } from '../controllers';

const historyRouter = express.Router();

historyRouter.route('/').get(getHistory);

export default historyRouter;
