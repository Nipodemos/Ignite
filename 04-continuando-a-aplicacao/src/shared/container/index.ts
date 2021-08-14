import { container } from 'tsyringe';

import ICategoriesRepository from '../../modules/cars/repositories/categories.interface';
import CategoriesRepository from '../../modules/cars/repositories/implementations/categories.repository';

// interfaceCategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
