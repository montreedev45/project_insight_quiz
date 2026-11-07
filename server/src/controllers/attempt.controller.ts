import type { AuthRequest } from "../middlewares/auth.middleware.js"
import type { Response } from "express"
import * as attemptService from '../services/attempt.service.js'

export const quizAttempt = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { assignmentId, studentId, startTime, endTime, status, totalScore } = req.body

        const data = await attemptService.quizAttempt(assignmentId, studentId, startTime, endTime, status, totalScore)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const response = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { attemptId, questionId, selectedOptionId, isCorrect, scoreEarned } = req.body

        const data = await attemptService.response(attemptId, questionId, selectedOptionId, isCorrect, scoreEarned)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}