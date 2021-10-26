import { container } from 'tsyringe';

import ICategoriesRepository from '../../modules/cars/repositories/categories.interface';
import CategoriesRepository from '../../modules/cars/repositories/implementations/categories.repository';
import SpecificationRepository from '../../modules/cars/repositories/implementations/specification.repository';
import ISpecificationRepository from '../../modules/cars/repositories/specification.interface';

// interfaceCategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

// interfaceSpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);
// interfaceSpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);
