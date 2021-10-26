import { getRepository, Repository } from 'typeorm';

import Specification from '../../entites/specification.model';
import ISpecificationRepository, {
  ICreateSpecificationDTO,
} from '../specification.interface';

export default class SpecificationRepository
  implements ISpecificationRepository
{
  private repository: Repository<Specification>;

  constructor(private specifications: Specification[] = []) {
    this.repository = getRepository(Specification);
  }

  async checkExistenceByName(name: string): Promise<boolean> {
    const specification = await this.repository.findOne({
      where: { name },
    });
    if (!specification) {
      return false;
    }
    return true;
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });
    return this.repository.save(specification);
  }
}
