import { prisma } from '../lib/prisma.js'
import { AssignmentStatus } from '@prisma/client'

export const quizAssignment = async (quizId: string, classroomId: string, timeLimitMinutes: number, deadline: Date, status: AssignmentStatus) => {
    const existingQuiz = await prisma.quiz.findUnique({ where: { id: quizId } })
    if (!existingQuiz) throw new Error("Quiz not found")

    const existingClassroom = await prisma.classroom.findUnique({ where: { id: classroomId } })
    if (!existingClassroom) throw new Error("Classroom not found")

    if (timeLimitMinutes <= 0) throw new Error("Time limit should be more than 1 minute")

    const quizAssignment = await prisma.quizAssignment.create({ data: { quiz_id: quizId, classroom_id: classroomId, time_limit_minutes: timeLimitMinutes, deadline, status } })
    if (!quizAssignment) throw new Error("Quiz assignment failed")

    return quizAssignment
}