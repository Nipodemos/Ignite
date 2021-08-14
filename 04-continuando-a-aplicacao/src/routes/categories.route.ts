import { Router } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/use_cases/create_category/create_category.controller';
import importCategoryController from '../modules/cars/use_cases/import_category';
import listCategoriesController from '../modules/cars/use_cases/list_category';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.get('/', (request, response) => {
  listCategoriesController().handle(request, response);
});

const createCategoryController = new CreateCategoryController();
categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.post('/import', upload.single('file'), (request, response) =>
  importCategoryController().handle(request, response),
);
export default categoriesRouter;
