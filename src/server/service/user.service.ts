import { prisma } from "../db";

export const updatePhoneNumber = async (input: {id: string, phone: string}) => {
    return (await prisma.user.update({
        where:{
            id: input.id
        },
        data:{
            phoneNumber: input.phone
        }
    }))
  };