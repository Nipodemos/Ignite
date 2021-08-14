import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categories')
export default class Category {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt!: Date;

  constructor({ id, name, description }: Category) {
    this.id = id;
    this.name = name;
    this.description = description;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
