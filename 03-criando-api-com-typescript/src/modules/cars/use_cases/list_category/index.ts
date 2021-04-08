import CategoriesRepository from '../../repositories/categories.repository';
import ListCategoriesController from './list_category.controller';
import ListCategoriesUseCase from './list_category.usecase';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export default listCategoriesController;
