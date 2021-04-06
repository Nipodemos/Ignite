import Category from '../models/category.model';
import ICategoriesRepository, {
  ICreateCategoryDTO,
} from './interface.categories.repository';

export default class PostgresCategoriesRepository
  implements ICategoriesRepository {
  findByName(name: string): boolean {
    console.log('name :>> ', name);
    throw new Error('Method not implemented.');
  }

  list(): Category[] {
    throw new Error('Method not implemented.');
  }

  create({ description, name }: ICreateCategoryDTO): void {
    console.log('name :>> ', name);
    console.log('description :>> ', description);
    throw new Error('Method not implemented.');
  }
}
