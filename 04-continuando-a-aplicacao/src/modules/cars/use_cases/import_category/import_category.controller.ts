import { Request, Response } from 'express';

import ImportCategoryUseCase from './import_category.usecase';

export default class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    console.log('file :>> ', file);
    this.importCategoryUseCase.execute(file);
    return response.send();
  }
}
