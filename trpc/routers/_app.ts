import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure, publicProcedure } from "../init";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

export const appRouter = createTRPCRouter({
  authCallback: publicProcedure.query(async ({ ctx }) => {
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

  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await prisma.file.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  deleteFile: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await prisma.file.findFirst({
        where: { id: input.id, userId },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      await prisma.file.delete({
        where: {
          id: input.id,
        },
      });

      return file;
    }),

  getFile: privateProcedure
    .input(
      z.object({
        key: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await prisma.file.findFirst({
        where: {
          key: input.key,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      return file;
    }),
});

export type AppRouter = typeof appRouter;
