import CategoriesRepository from '../../repositories/implementations/categories.repository';
import ImportCategoryController from './import_category.controller';
import ImportCategoryUseCase from './import_category.usecase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export default importCategoryController;
