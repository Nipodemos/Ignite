import ISpecificationRepository from '../repositories/specification.interface';

interface IRequest {
  name: string;
  description: string;
}

export default class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationsRepository.checkExistenceByName(
      name,
    );

    if (specificationExists) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.specificationsRepository.create({ name, description });
  }
}
