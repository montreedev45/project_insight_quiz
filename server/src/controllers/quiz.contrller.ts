import type { Response } from "express"
import type { AuthRequest } from "../middlewares/auth.middleware.js"
import * as quizService from '../services/quiz.service.js'

export const addQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const {subjectId, title, description} = req.body

        const data = await quizService.addQuiz(subjectId, title, description)
        res.status(200).json({success: true, data})
    } catch (error: any) {
        res.status(500).json({success: false, message: error.message})
    }
}