import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/use_cases/create_category';
import listCategoriesController from '../modules/cars/use_cases/list_category';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRouter.post('/', (request, response) =>
  createCategoryController.handle(request, response),
);

categoriesRouter.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;
  console.log('file :>> ', file);
  response.send();
});
export default categoriesRouter;
