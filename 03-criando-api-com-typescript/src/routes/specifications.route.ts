import { Router } from 'express';

import createSpecificationController from '../modules/cars/use_cases/create_specification';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) =>
  createSpecificationController.handle(request, response),
);

export default specificationsRouter;
