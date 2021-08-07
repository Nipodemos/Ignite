import CategoriesRepository from '../../repositories/implementations/categories.repository';
import ImportCategoryController from './import_category.controller';
import ImportCategoryUseCase from './import_category.usecase';

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
  );
  return importCategoryController;
};
