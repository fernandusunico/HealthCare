import { Injectable } from '@nestjs/common';
import { User } from '../database/models/user.model';

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async create(userDto: Partial<User>): Promise<User> {
    return User.create(userDto);
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async update(id: number, userDto: Partial<User>): Promise<User | null> {
    const user = await this.findById(id);
    if (!user) {
      return null;
    }
    return user.update(userDto);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findById(id);
    if (user) {
      await user.destroy();
    }
  }
}
