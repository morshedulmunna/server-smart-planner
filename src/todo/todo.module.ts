import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaClient],
})
export class TodoModule {}
