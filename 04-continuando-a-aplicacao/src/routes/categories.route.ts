import { Router } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/use_cases/create_category/create_category.controller';
import ImportCategoryController from '../modules/cars/use_cases/import_category/import_category.controller';
import ListCategoriesController from '../modules/cars/use_cases/list_category/list_category.controller';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

const listCategoriesController = new ListCategoriesController();
categoriesRouter.get('/', listCategoriesController.handle);

const createCategoryController = new CreateCategoryController();
categoriesRouter.post('/', createCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);
export default categoriesRouter;
