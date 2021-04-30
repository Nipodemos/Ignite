import ICategoriesRepository from '../../repositories/categories.interface';

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryExist = this.categoriesRepository.findByName(name);

    if (categoryExist) {
      throw new Error('Category already exists');
    }
    this.categoriesRepository.create({ name, description });
  }
}
