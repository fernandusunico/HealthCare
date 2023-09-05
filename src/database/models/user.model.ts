import { Model, Column, Table, HasMany } from 'sequelize-typescript';
import { Post } from '../models/post.model';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @HasMany(() => Post)
  posts: Post[];
}
