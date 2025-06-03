import { z } from 'zod';
import { agentsRouter } from '@/module/agents/server/procedure';
import {  createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
  agents:agentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;