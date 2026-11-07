import type { Response } from "express"
import type { AuthRequest } from "../middlewares/auth.middleware.js"
import * as quizService from '../services/quiz.service.js'

export const addQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { subjectId, title, description } = req.body

        const data = await quizService.addQuiz(subjectId, title, description)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const addTag = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { subjectId, name } = req.body

        const data = await quizService.addTag(subjectId, name)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const addQuestion = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { quizId, tagId, questionText, point, questionType } = req.body;

        const data = await quizService.addQuestion(quizId, tagId, questionText, point, questionType)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const addOption = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const {questionId, optionText, isCorrect} = req.body

        const data = await quizService.addOption(questionId, optionText, isCorrect)
        res.status(200).json({success: true, data})
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}