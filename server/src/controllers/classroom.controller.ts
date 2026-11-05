import type { AuthRequest } from "../middlewares/auth.middleware.js";
import type { Response } from "express";
import * as classroomService from '../services/classroom.service.js'


export const addClassroom = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { name, subjectId } = req.body

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        const data = await classroomService.addClassroom(subjectId, name, code)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const classroomEnrollment = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const studentId = req.user?.userId
        const { classroomId } = req.body

        if (!studentId) {
            res.status(401).json({ success: false, message: "Unauthorized: User information not found" });
            return;
        }

        const data = await classroomService.classroomEnrollment(classroomId, studentId)
        res.status(200).json({success: true, data})
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message })
    }
}