import type { Request, Response } from 'express';
import * as authService from '../services/auth.service.js'

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const data = await authService.login(email, password)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message })
    }
}

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, firstName, lastName, role } = req.body

        const data = await authService.register(email, password, firstName, lastName, role)
        res.status(200).json({ success: true, data })
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message })
    }
}