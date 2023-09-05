import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { Post } from '../database/models/post.model';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  // @Post()
  create(@Body() userDto: Partial<Post>): Promise<Post> {
    return this.postService.create(userDto);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Post | null> {
    return this.postService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() userDto: Partial<Post>,
  ): Promise<Post | null> {
    return this.postService.update(id, userDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.postService.delete(id);
  }
}
