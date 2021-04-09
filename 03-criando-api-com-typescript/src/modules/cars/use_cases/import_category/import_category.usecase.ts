import CategoriesRepository from '../../repositories/implementations/categories.repository';

export default class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(file: any) {
    console.log('file :>> ', file);
  }
}
