import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createTodoDto: any) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: createTodoDto.email,
      },
    });

    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        short_des: createTodoDto.short_des,
        start_time: createTodoDto.start_time,
        end_time: createTodoDto.end_time,
        user: {
          connect: {
            id: user.id, // Replace 'user-id' with the actual user ID
          },
        },
      },
    });
  }

  async findAll(email) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return this.prisma.todo.findMany({
      where: {
        userId: user.id,
      },
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
