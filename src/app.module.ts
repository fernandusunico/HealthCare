import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './database/models/user.model';
import { Post } from './database/models/post.model';
import { UserController } from './controller/user.controller';
import { PostController } from './controller/post.controller';
import { ExternalApiController } from './controller/external-api.controller';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';
import { ExternalApiService } from './service/external-api.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'SmartWork@123',
      database: 'hcd',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User, Post]),
  ],
  controllers: [UserController, PostController, ExternalApiController],
  providers: [UserService, PostService, ExternalApiService],
})
export class AppModule {
  constructor() {
    console.log('Database connection established');
  }
}
