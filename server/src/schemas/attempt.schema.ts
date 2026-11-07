import {z} from 'zod'

export const attemptSchema = z.object({
    body: z.object({
        assignmentId: z.string().min(6).max(100),
        studentId: z.string().min(6).max(100),
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        status: z.enum(["ONGOING", "COMPLETED", "ABANDONED"]),
        totalScore: z.number()
    })
})

export const response = z.object({
    body: z.object({
        attemptId: z.string().min(6).max(100),
        questionId: z.string().min(6).max(100),
        selectedOptionId: z.string().min(6).max(100),
        isCorrect: z.boolean().default(false),
        scoreEarned: z.number()
    })
})