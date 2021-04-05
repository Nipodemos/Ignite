import Category from '../models/category.model';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export default interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}
