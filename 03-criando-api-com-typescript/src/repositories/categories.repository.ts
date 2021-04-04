import Category from '../models/category.model';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export default class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
