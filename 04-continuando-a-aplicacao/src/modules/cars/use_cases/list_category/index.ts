import CategoriesRepository from '../../repositories/implementations/categories.repository';
import ListCategoriesController from './list_category.controller';
import ListCategoriesUseCase from './list_category.usecase';

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
  );

  return listCategoriesController;
};
