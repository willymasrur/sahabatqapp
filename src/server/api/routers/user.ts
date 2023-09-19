import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { updatePhoneHandler } from "~/server/controller/user.controller";
import { UserUpdateSchema } from "~/server/schema/user.schema";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
  updateUserPhone: publicProcedure
  .input(UserUpdateSchema)
  .mutation(({ input }) => updatePhoneHandler({ input })),
  
  getSecretMessage: publicProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
