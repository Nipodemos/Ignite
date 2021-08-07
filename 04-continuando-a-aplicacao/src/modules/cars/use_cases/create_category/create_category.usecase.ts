import ICategoriesRepository from '../../repositories/categories.interface';

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExist = await this.categoriesRepository.findByName(name);

    if (categoryExist) {
      throw new Error('Category already exists');
    }
    await this.categoriesRepository.create({ name, description });
  }
}
