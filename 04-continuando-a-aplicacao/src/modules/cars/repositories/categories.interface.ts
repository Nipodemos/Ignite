import Category from '../entites/category.model';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export default interface ICategoriesRepository {
  findByName(name: string): boolean;
  list(): Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}
