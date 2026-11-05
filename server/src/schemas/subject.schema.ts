import {z} from 'zod'

export const addSubjectSchema = z.object({
    body: z.object({
        name: z.string().min(4).max(255),
    })
})