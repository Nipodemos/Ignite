import Category from '../models/category.model';
import ICategoriesRepository, {
  ICreateCategoryDTO,
} from './categories.interface';

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    throw new Error('Method not implemented.');
  }

  getAll(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category({
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.categories.push(category);
  }

  findByName(name: string): boolean {
    const foundCategory = this.categories.some(
      (category) => category.name === name,
    );

    return foundCategory;
  }
}
