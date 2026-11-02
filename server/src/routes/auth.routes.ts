import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import * as authController from "../controllers/auth.controller.js"
import * as authValidate from "../schemas/auth.schema.js";

const router = Router()

router.post("/login", validate(authValidate.loginSchema), authController.login)
router.post("/register", validate(authValidate.registerSchema), authController.register)

export default router;