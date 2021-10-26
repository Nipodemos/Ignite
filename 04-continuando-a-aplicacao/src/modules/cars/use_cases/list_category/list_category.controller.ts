import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoriesUseCase from './list_category.usecase';

export default class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const allCategories = await listCategoriesUseCase.execute();
    return response.json(allCategories);
  }
}
