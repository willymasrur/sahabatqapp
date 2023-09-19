import { number, object, string } from "zod";
import type { TypeOf } from "zod";

export const UserUpdateSchema = object({
    phoneNumber: string({ required_error: 'Phone is required' }),
    uid: string({required_error: "Id is required"})
});


export type UserUpdateSchemaInput = TypeOf<typeof UserUpdateSchema>;