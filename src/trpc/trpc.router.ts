import { Injectable } from '@nestjs/common';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { FastifyInstance } from 'fastify';
import { IndexRouter } from './router/index.router';

@Injectable()
export class TrpcRouter {
  constructor(private readonly index: IndexRouter) {}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  router = this.index.appRouter;

  async applyMiddleware(app: FastifyInstance) {
    await app.register(fastifyTRPCPlugin, {
      prefix: '/v2',
      trpcOptions: { router: this.router },
    });
  }
}
//
export type AppRouter = TrpcRouter['router'];
