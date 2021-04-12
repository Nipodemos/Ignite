import csvParse from 'csv-parse';
import fs from 'fs';

import CategoriesRepository from '../../repositories/implementations/categories.repository';

export default class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse();
    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      console.log('line :>> ', line);
    });
  }
}
