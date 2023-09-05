import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../database/models/user.model';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() userDto: Partial<User>): Promise<User> {
    return this.userService.create(userDto);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() userDto: Partial<User>,
  ): Promise<User | null> {
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
