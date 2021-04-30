import CategoriesRepository from '../../repositories/implementations/categories.repository';
import CreateCategoryController from './create_category.controller';
import CreateCategoryUseCase from './create_category.usecase';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
