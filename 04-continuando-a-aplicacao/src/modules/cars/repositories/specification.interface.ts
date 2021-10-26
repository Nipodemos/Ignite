import Specification from '../entites/specification.model';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export default interface ISpecificationRepository {
  checkExistenceByName(name: string): Promise<boolean>;
  create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification>;
}
