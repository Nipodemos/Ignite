import { inject, injectable } from 'tsyringe';

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

  execute({ name, description }: IRequest): void {
    const specificationExists =
      this.specificationRepository.checkExistenceByName(name);

    if (specificationExists) {
      throw new Error(`Specification "${name}" already exists`);
    }

    this.specificationRepository.create({ name, description });
  }
}
