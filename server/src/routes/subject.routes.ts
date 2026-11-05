import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import * as subjectController from '../controllers/subject.controller.js'
import * as subjectValidate from '../schemas/subject.schema.js'
import { verifyToken, verifyTeacher } from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/", verifyToken, verifyTeacher, validate(subjectValidate.addSubjectSchema), subjectController.addSubject)

export default router;