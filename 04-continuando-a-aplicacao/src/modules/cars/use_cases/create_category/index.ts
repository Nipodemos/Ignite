import CategoriesRepository from '../../repositories/implementations/categories.repository';
import CreateCategoryController from './create_category.controller';
import CreateCategoryUseCase from './create_category.usecase';

export default (): CreateCategoryController => {


const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

return  createCategoryController;
}
