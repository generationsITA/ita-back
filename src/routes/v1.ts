import express from 'express';

import historyRouter from './historyRouter';

const v1 = express.Router();

v1.use('/history', historyRouter);

export default v1;
