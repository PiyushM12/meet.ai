import { z } from 'zod';
import { agentsRouter } from '@/module/agents/server/procedure';
import {  createTRPCRouter } from '../init';
import { meetingsRouter } from '@/module/meetings/server/procedure';
export const appRouter = createTRPCRouter({
  agents:agentsRouter,
  meetings:meetingsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;