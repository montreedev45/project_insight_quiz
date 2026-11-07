import { z } from 'zod'

export const addQuizSchema = z.object({
    body: z.object({
        subjectId: z.string().min(6).max(100),
        title: z.string().min(6).max(100),
        description: z.string().min(6).max(255)
    })
})

export const addQuestionSchema = z.object({
    body: z.object({
        quizId: z.string().min(6).max(100),
        tagId: z.string().min(6).max(100),
        questionText: z.string().min(6).max(100),
        point: z.number(),
        questionType: z.enum(["MULTIPLE_CHOICE", "TRUE_FALSE", "SHORT_ANSWER"])
    })
})

export const addTagSchema = z.object({
    body: z.object({
        subjectId: z.string().min(6).max(100),
        name: z.string().min(6).max(100),
    })
})

export const addOptionSchema = z.object({
    body: z.object({
        questionId: z.string().min(6).max(100),
        optionText: z.string().min(1).max(100),
        isCorrect: z.boolean().default(false)
    })
})