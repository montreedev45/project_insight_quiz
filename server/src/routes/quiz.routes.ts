import { Router } from "express";
import { verifyTeacher, verifyToken } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import * as quizValidate from '../schemas/quiz.schema.js'
import * as quizController from '../controllers/quiz.contrller.js'

const router = Router()

router.post('/', verifyToken, verifyTeacher, validate(quizValidate.addQuizSchema), quizController.addQuiz)

export default router