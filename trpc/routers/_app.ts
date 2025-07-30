import { TRPCError } from "@trpc/server";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const appRouter = createTRPCRouter({
  authCallback: baseProcedure.query(async ({ ctx }) => {
    const { userId } = ctx.auth;

    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    const user = await currentUser();

    const dbUser = await prisma.user.findFirst({ where: { id: userId } });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user?.id!,
          email: user?.emailAddresses[0].emailAddress!,
        },
      });
    }

    return {
      success: true,
    };
  }),
});

export type AppRouter = typeof appRouter;
