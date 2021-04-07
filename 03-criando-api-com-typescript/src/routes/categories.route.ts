import { Router } from 'express';

import { createCategoryController } from '../modules/cars/use_cases/create_category';

const categoriesRouter = Router();

categoriesRouter.get('/', (request, response) => {
  // const allCategories = categoriesRepository.getAll();
  // return response.json(allCategories);
});

categoriesRouter.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

export default categoriesRouter;
