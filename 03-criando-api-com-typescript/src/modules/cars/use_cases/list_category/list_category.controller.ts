import { Request, Response } from 'express';

import ListCategoriesUseCase from './list_category.usecase';

export default class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();
    return response.json(allCategories);
  }
}
