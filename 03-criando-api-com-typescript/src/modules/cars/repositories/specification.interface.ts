export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export default interface ISpecificationRepository {
  checkExistenceByName(name: string): boolean;
  create({ description, name }: ICreateSpecificationDTO): void;
}
