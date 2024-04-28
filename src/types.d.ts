import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface Request extends FastifyRequest {
    user: any;
  }
}
