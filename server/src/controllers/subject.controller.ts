import type { Response } from "express"
import type { AuthRequest } from "../middlewares/auth.middleware.js"
import * as subjectService from '../services/subject.service.js'

export const addSubject = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const teacherId = req.user?.userId
        const { name } = req.body

        if (!teacherId) {
            res.status(401).json({ success: false, message: "Unauthorized: User information not found" });
            return;
        }

        const data = await subjectService.addSubject(name, teacherId)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}