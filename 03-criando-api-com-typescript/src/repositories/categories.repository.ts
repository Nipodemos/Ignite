import Category from '../models/category.model';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
}

export { CategoriesRepository };
