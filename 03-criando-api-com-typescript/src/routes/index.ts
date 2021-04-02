import { Router } from 'express';

import categoriesRouter from './categories.route';

const mainRouter = Router();
mainRouter.use('/categories', categoriesRouter);
export default mainRouter;
