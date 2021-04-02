import { Router } from 'express';

import Category from '../models/category';

const categoriesRouter = Router();
const categories: Category[] = [];

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Category({
    name,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  categories.push(category);
  return response.status(201).json(category);
});

export default categoriesRouter;
