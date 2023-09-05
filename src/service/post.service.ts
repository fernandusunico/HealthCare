import { Injectable } from '@nestjs/common';
import { Post } from '../database/models/post.model';

@Injectable()
export class PostService {
  async findAll(): Promise<Post[]> {
    return Post.findAll();
  }

  async create(postDto: Partial<Post>): Promise<Post> {
    return Post.create(postDto);
  }

  async findById(id: number): Promise<Post | null> {
    return Post.findByPk(id);
  }

  async update(id: number, userDto: Partial<Post>): Promise<Post | null> {
    const post = await this.findById(id);
    if (!post) {
      return null;
    }
    return post.update(userDto);
  }

  async delete(id: number): Promise<void> {
    const post = await this.findById(id);
    if (post) {
      await Post.destroy({
        where: {},
        truncate: true,
      });
    }
  }
}
