import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: { userId: string; role: string }
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401).json({ success: false, message: "Unauthorized: Token not found or format is invalid" })
        return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ success: false, message: "Unauthorized: Token is missing" });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as unknown as { userId: string, role: string }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ success: false, message: "Forbidden: Token expire or invalid" });
    }
}

export const verifyTeacher = (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || req.user.role !== "TEACHER") {
        res.status(403).json({ success: false, message: "Forbidden: Access restricted to instructors only" });
        return;
    }
    next();
}