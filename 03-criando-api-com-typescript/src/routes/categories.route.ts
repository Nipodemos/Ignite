import { Router } from 'express';

const categoriesRouter = Router();
const categories = [];

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  categories.push({ name, description });
  return response.status(201).send();
});

export default categoriesRouter;
