import csvParse from 'csv-parse';
import fs from 'fs';
import { container, inject, injectable } from 'tsyringe';

import CategoriesRepository from '../../repositories/implementations/categories.repository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
export default class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
          fs.promises.unlink(file.path);
        })
        .on('error', (err) => {
          reject(err);
        });
      return categories;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    const categoriesRepository = container.resolve(CategoriesRepository);
    categories.forEach(async (category) => {
      const { name, description } = category;
      const categoryExists = await categoriesRepository.findByName(name);
      if (!categoryExists) {
        await categoriesRepository.create({ name, description });
      }
    });
  }
}
