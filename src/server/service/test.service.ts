import type{ Prisma } from "@prisma/client";
import { prisma } from "../db";

export const createAttempt = async (input: Prisma.TestAttemptUncheckedCreateInput) => {
    return (await prisma.testAttempt.create({
      data: input
    }));
  };
  export const findTest = async (input: {score: number, testid: number}) => {
    return await prisma.testResult.findFirst({
        where: {
          testResultMin: {
            lte: input.score
          },
          testResultMax: {
            gte: input.score
          }
        }
      });
  }