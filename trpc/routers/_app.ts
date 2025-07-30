import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(({ ctx }) => {
    const { userId } = ctx.auth;

    if (!userId) {
      return {
        greeting: "Hello! You are not signed in.",
      };
    }

    return {
      greeting: `Hello ${userId}!`,
    };
  }),
});

export type AppRouter = typeof appRouter;
