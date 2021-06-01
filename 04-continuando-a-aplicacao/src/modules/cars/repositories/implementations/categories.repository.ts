import { Repository } from 'typeorm';

import Category from '../../entites/category.model';
import ICategoriesRepository, {
  ICreateCategoryDTO,
} from '../categories.interface';

export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor({repository}: CategoriesRepository) {
    this.repository = repository;
  }

  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description
    })

    await this.repository.save(category)
  }

  async findByName(name: string): Promise<boolean> {
    const foundCategory = await this.repository.count({
      where: {
        name
      }
    })

    return foundCategory > 0;
  }
}
