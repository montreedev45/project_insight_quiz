import { prisma } from '../lib/prisma.js'

export const addQuiz = async (subjectId: string, title: string, description: string) => {
    const existingSubject = await prisma.subject.findUnique({ 
        where: { id: subjectId } 
    })
    if (!existingSubject) throw new Error("Subject not found")

    const quiz = await prisma.quiz.create({ data: { subject_id: subjectId, title, description } })
    if (!quiz) throw new Error("Add quiz failed")

    return quiz
}