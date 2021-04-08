import Specification from '../../models/specification.model';
import ISpecificationRepository, {
  ICreateSpecificationDTO,
} from '../specification.interface';

export default class SpecificationRepository
  implements ISpecificationRepository {
  constructor(private specifications: Specification[] = []) {}

  checkExistenceByName(name: string): boolean {
    const doesSpecificationExists = this.specifications.some(
      (specification) => specification.name === name,
    );
    return doesSpecificationExists;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification({
      name,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.specifications.push(specification);
    console.log('name :>> ', name);
    console.log('description :>> ', description);
  }
}
