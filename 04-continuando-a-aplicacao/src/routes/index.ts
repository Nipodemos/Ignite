import { Router } from 'express';

import categoriesRouter from './categories.route';
import specificationsRouter from './specifications.route';

const mainRouter = Router();
mainRouter.use('/categories', categoriesRouter);
mainRouter.use('/specifications', specificationsRouter);
export default mainRouter;
