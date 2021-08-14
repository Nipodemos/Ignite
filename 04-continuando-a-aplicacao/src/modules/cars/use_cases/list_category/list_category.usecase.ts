import Category from '../../entites/Category';
import ICategoriesRepository from '../../repositories/categories.interface';

export default class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  execute(): Promise<Category[]> {
    const categories = this.categoriesRepositories.list();

    return categories;
  }
}
