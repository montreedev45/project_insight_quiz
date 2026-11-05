import { z } from 'zod'

export const classroomSchema = z.object({
    body: z.object({
        subjectId: z.string().min(6).max(100),
        name: z.string().min(6).max(100)
    })
})

export const classroomEnrollment = z.object({
    body: z.object({
        classroomId: z.string().min(6).max(100)
    })
})