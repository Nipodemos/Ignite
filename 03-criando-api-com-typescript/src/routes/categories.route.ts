import { Router } from 'express';

import CategoriesRepository from '../modules/cars/repositories/categories.repository';
import CreateCategoryService from '../modules/cars/services/create_category.service';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.get('/', (request, response) => {
  const allCategories = categoriesRepository.getAll();
  return response.json(allCategories);
});

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export default categoriesRouter;
