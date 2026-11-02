import { email, z } from 'zod'

export const loginSchema = z.object({
    body: z.object({
        email: z.email({ message: "Invalid email format" }),
        password: z.string().min(6).max(255),
    })
})

export const registerSchema = z.object({
    body: z.object({
        email: z.email({ message: "Invalid email format" }),
        password: z.string().min(6).max(255),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
        role: z.enum(["TEACHER", "STUDENT"])
    })
})