import Category from '../../entites/category.model';
import ICategoriesRepository from '../../repositories/categories.interface';

export default class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepositories.list();

    return categories;
  }
}
