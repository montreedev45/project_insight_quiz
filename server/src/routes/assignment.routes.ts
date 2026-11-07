import { Router } from "express";
import { verifyToken, verifyTeacher } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import * as assignmentVlidate from '../schemas/assignment.schema.js'
import * as assignmentController from '../controllers/assignment.controller.js'

const router = Router()

router.post('/quiz-assignment', verifyToken, verifyTeacher, validate(assignmentVlidate.quizAssignment), assignmentController.quizAssignment)

export default router