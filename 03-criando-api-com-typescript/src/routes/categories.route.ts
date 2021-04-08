import { Router } from 'express';

import { createCategoryController } from '../modules/cars/use_cases/create_category';
import listCategoriesController from '../modules/cars/use_cases/list_category';

const categoriesRouter = Router();

categoriesRouter.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRouter.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

export default categoriesRouter;
