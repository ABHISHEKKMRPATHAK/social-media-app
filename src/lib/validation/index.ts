import * as z  from 'zod'

export const SignupValidation = z.object({
    username: z.string().min(2,{message:"too short"}),
    name : z.string().min(2,{message:"too short"}),
    email: z.string().email(),
    password: z.string().min(2,{message:"Password should be atleast 8 characters long"})

  })