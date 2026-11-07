import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import * as attemptValidate from "../schemas/attempt.schema.js";
import * as attemptController from '../controllers/attempt.controller.js'

const router = Router()

router.post('/quiz-attempt', verifyToken, validate(attemptValidate.attemptSchema), attemptController.quizAttempt)
router.post('/response', verifyToken, validate(attemptValidate.response), attemptController.response)

export default router