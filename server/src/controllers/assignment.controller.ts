import type { AuthRequest } from "../middlewares/auth.middleware.js"
import type { Response } from "express"
import * as assignmentService from '../services/assignment.service.js'

export const quizAssignment = async(req: AuthRequest, res: Response):Promise<void> => {
    try {
        const {quizId, classroomId, timeLimitMinutes, deadline, status} = req.body

        const data = await assignmentService.quizAssignment(quizId, classroomId, timeLimitMinutes, deadline, status)
        res.status(200).json({success:true, data})
    } catch (error: any) {
        res.status(500).json({success: false, message: error.message})
    }
}