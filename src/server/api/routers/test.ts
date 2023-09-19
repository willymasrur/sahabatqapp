import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { submitHandler } from "~/server/controller/test.controller";
import { submitTestSchema } from "~/server/schema/test.schema";

export const testRouter = createTRPCRouter({
  getTest: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.test.findMany({
      include: {
        testCategory: true
      }
    });
  }),
  getTestAttemptbyUser: publicProcedure.input(z.object({id: z.string()})).query(({ ctx, input }) => {
    return ctx.prisma.testAttempt.findMany({
      include: {
        testResult: true,
        test: true,
      },
      where:{
        testAttemptUserId: input.id
      }
    });
  }),
  getSingleAttemptbyid: publicProcedure.input(z.object({Userid: z.string(), id: z.number()})).query(({ ctx, input }) => {
    return ctx.prisma.testAttempt.findFirst({
      include: {
        testResult: true,
        test: true,
      },
      where:{
        testAttemptId: input.id,
        testAttemptUserId: input.Userid
      }
    });
  }),
  getTestbyid: publicProcedure.input(z.object({ id: z.string() })).query(({ctx, input})=>{
    const id = parseInt(input.id);
    const test =  ctx.prisma.test.findFirst({
      where:{
        testId: id
      }
    })
    return test;
  }), 
  SubmitTest: publicProcedure
  .input(submitTestSchema)
  .mutation(({ input }) => submitHandler({ input })),
});
