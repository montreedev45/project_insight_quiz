import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import * as classroomValidate from '../schemas/classroom.schema.js'
import * as classroomController from '../controllers/classroom.controller.js'
import { verifyToken, verifyTeacher } from "../middlewares/auth.middleware.js";
const router = Router()

router.post('/', verifyToken, verifyTeacher, validate(classroomValidate.classroomSchema), classroomController.addClassroom)
router.post('/enrollment', verifyToken, validate(classroomValidate.classroomEnrollment), classroomController.classroomEnrollment )

export default router;