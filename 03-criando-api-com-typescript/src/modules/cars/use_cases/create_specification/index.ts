import SpecificationRepository from '../../repositories/implementations/specification.repository';
import CreateSpecificationController from './create_specification.controller';
import CreateSpecificationUseCase from './create_specification.usecase';

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export default createSpecificationController;
