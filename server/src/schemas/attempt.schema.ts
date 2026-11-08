import { z } from 'zod'
import { AttemptStatus } from '@prisma/client'

export const attemptSchema = z.object({
    body: z.object({
        assignmentId: z.string().min(6).max(100),
        studentId: z.string().min(6).max(100),
        startTime: z.coerce.date(),
        endTime: z.preprocess(
            (val) => (val === "" || val === null ? undefined : val),
            z.union([z.string(), z.date()]).transform((val) => new Date(val)).optional()
        ),
        status: z.nativeEnum(AttemptStatus).optional(),
        totalScore: z.number().default(0)
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

export const attemptSubmitSchema = z.object({
    body: z.object({
        attemptId: z.string().min(6).max(100),
        studentId: z.string().min(6).max(100),
        answer: z.array(z.object({
            questionId: z.string().min(6).max(100),
            selectedOptionId: z.string().min(6).max(100)
        }))
    })
})