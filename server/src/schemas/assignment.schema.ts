import {z} from 'zod'

export const quizAssignment = z.object({
    body: z.object({
        quizId: z.string().min(6).max(100),
        classroomId: z.string().min(6).max(100),
        timeLimitMinutes: z.number(),
        deadline: z.coerce.date(),
        status: z.enum(["DRAFT", "PUBLISHED", "CLOSED"])
    })
})