import type { Request, Response, NextFunction } from "express";
import { z, type ZodType, ZodError } from 'zod';

export const validate = (schema: ZodType) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params
            })
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ success: false, errors: z.treeifyError(error) });
                return;
            }
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
    }