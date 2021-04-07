import { Router } from 'express';

import SpecificationRepository from '../modules/cars/repositories/specification.repository';
import CreateSpecificationService from '../modules/cars/services/create_specification.service';

const specificationsRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export default specificationsRouter;
