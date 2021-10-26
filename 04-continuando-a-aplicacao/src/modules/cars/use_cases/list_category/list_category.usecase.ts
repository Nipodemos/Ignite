import { inject, injectable } from 'tsyringe';

import Category from '../../entites/Category';
import ICategoriesRepository from '../../repositories/categories.interface';

@injectable()
export default class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepositories.list();

    return categories;
  }
}
