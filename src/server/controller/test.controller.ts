import { TRPCError } from "@trpc/server";
import type { SubmitTestInput } from "../schema/test.schema";
import { createAttempt, findTest } from "../service/test.service";

export const submitHandler = async ({input}: { input: SubmitTestInput;}) => {
    try {

      const testResult = await findTest({score: input.Score, testid: input.testId})
      if (!testResult) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Test Result not exists",
        });
      }
      const user = await createAttempt({
        testAttemptTestId: input.testId,
        testAttemptOrder: input.Order,
        testAttemptUserId: input.userId,
        testAttemptTestResultId: testResult.testResultId,
        testAttemptStatus: input.status,
        testAttemptScore: input.Score,
      });
  
      return {
        status: "success",
        data: {
          user,
        },
      };
    } catch (err) {
      throw err;
    }
  };