import { Router } from 'express';

import CreateSpecificationController from '../modules/cars/use_cases/create_specification/create_specification.controller';

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post('/', createSpecificationController.handle);

export default specificationsRouter;
