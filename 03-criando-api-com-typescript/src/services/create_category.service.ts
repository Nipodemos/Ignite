import CategoriesRepository from '../repositories/categories.repository';

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExist = this.categoriesRepository.findByName(name);

    if (categoryExist) {
      throw new Error('Category already exists');
    }
    this.categoriesRepository.create({ name, description });
  }
}
