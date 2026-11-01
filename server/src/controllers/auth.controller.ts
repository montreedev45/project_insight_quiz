import type { Request, Response } from 'express';
import * as authService from '../services/auth.service.js'

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        if (!email) {
            res.status(400).json({ error: "Email is required" })
            return;
        }

        const data = await authService.loginUser(email)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message })
    }
}