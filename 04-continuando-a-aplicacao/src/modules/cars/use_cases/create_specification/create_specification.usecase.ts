import { inject, injectable } from 'tsyringe';

import Specification from '../../entites/specification.model';
import SpecificationRepository from '../../repositories/implementations/specification.repository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: SpecificationRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const specificationExists =
      await this.specificationRepository.checkExistenceByName(name);

    if (specificationExists) {
      throw new Error(`Specification "${name}" already exists`);
    }

    return this.specificationRepository.create({ name, description });
  }
}
