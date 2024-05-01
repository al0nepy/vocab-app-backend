import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface IRequest extends FastifyRequest {
    user: {
      id: number;
      email: string;
    };
  }
}
