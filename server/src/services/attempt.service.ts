import { prisma } from "../lib/prisma.js";
import { AttemptStatus } from "@prisma/client";

export const quizAttempt = async (assignmentId: string, studentId: string, startTime: Date, endTime: Date, status: AttemptStatus, totalScore: number) => {
    const existingAssignment = await prisma.quizAssignment.findUnique({ where: { id: assignmentId } })
    if (!existingAssignment) throw new Error("Quiz assignment not found")

    const existingStudent = await prisma.user.findUnique({ where: { id: studentId } })
    if (!existingStudent) throw new Error("Student not found")

    if (endTime <= startTime) throw new Error("End time or Start time is invalid")

    const quizAttempt = await prisma.quizAttempt.create({ data: { assignment_id: assignmentId, student_id: studentId, start_time: startTime, end_time: endTime, status, total_score: totalScore } })
    if (!quizAttempt) throw new Error("Quiz attempt failed")

    return quizAttempt;
}

export const response = async (attemptId: string, questionId: string, selectedOptionId: string, isCorrect: boolean, scoreEarned: number) => {
    const existingAttempt = await prisma.quizAttempt.findUnique({ where: { id: attemptId } })
    if (!existingAttempt) throw new Error("Quiz attempt not found")

    const existingQuestion = await prisma.question.findUnique({ where: { id: questionId } })
    if (!existingQuestion) throw new Error("Question not found")

    const existingOption = await prisma.option.findUnique({ where: { id: selectedOptionId } })
    if (!existingOption) throw new Error("Option not found")

    const response = await prisma.response.create({ data: { attempt_id: attemptId, question_id: questionId, selected_option_id: selectedOptionId, is_correct: isCorrect, score_earned: scoreEarned } })
    if (!response) throw new Error("Response failed")

    return response;
}