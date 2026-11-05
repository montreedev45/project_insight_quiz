import { z } from 'zod'

export const addQuizSchema = z.object({
    body: z.object({
        subjectId: z.string().min(6).max(100),
        title: z.string().min(6).max(100),
        description: z.string().min(6).max(255)
    })
})