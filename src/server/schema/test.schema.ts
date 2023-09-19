import { number, object, string } from "zod";
import type { TypeOf } from "zod";

export const submitTestSchema = object({
    testId: number({ required_error: 'Test Id Required' }),
    // resutlId: number({required_error: 'Result Id Required'}),
    userId: string({required_error: 'User Id Required'}),
    userChildId: number().optional(),
    Order: number().default(1),
    Score: number({required_error: "Score is Required"}),
    status: number().default(0)
});


export type SubmitTestInput = TypeOf<typeof submitTestSchema>;