import { prisma } from '../lib/prisma.js'
import { QuestionType, AssignmentStatus } from '@prisma/client'

export const addQuiz = async (subjectId: string, title: string, description: string) => {
    const existingSubject = await prisma.subject.findUnique({
        where: { id: subjectId }
    })
    if (!existingSubject) throw new Error("Subject not found")

    const quiz = await prisma.quiz.create({ data: { subject_id: subjectId, title, description } })
    if (!quiz) throw new Error("Add quiz failed")

    return quiz
}

export const addTag = async (subjectId: string, name: string) => {
    const existingSubject = await prisma.subject.findUnique({ where: { id: subjectId } })
    if (!existingSubject) throw new Error("Subject not found")

    const tag = await prisma.tag.create({ data: { subject_id: subjectId, name } })
    if (!tag) throw new Error("Add tag failed")

    return tag
}

export const addQuestion = async (quizId: string, tagId: string, questionText: string, point: number, questionType: QuestionType) => {
    const existingQuiz = await prisma.quiz.findUnique({ where: { id: quizId } })
    if (!existingQuiz) throw new Error("Quiz not found")

    const existingTag = await prisma.tag.findUnique({ where: { id: tagId } })
    if (!existingTag) throw new Error("Tag not found")


    const question = await prisma.question.create({ data: { quiz_id: quizId, tag_id: tagId, question_text: questionText, point, question_type: questionType } })
    if (!question) throw new Error("Add question failed")

    return question
}

export const addOption = async (questionId: string, optionText: string, isCorrect: boolean) => {
    const existingQuestion = await prisma.question.findUnique({ where: { id: questionId } })
    if (!existingQuestion) throw new Error("Question not found")

    const option = await prisma.option.create({ data: { question_id: questionId, option_text: optionText, is_correct: isCorrect } })
    if (!option) throw new Error("Add option failed")

    return option
}