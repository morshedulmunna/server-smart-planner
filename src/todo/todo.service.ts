import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaClient) {}

  create(createTodoDto: any) {
    return this.prisma.todo.create({
      data: {
        ...createTodoDto,
      },
    });
  }

  findAll() {
    return this.prisma.todo.findMany({
      orderBy: {
        create_at: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: any) {
    return `This action updates a #${id} todo`;
  }

  remove(id: string) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
