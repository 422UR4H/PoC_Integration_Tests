import { Router } from "express";
import { userSchema, updateUserSchema, userPlayerSchema } from "@/schemas/user.schemas";
import { signIn, signUp, update } from "@/controllers/auth.controllers";
import validateSchema from "@/middlewares/validateSchema";
import validateAuth from "@/middlewares/validateAuth";

const router = Router();
router
    .post("/sign-up", validateSchema(userPlayerSchema), signUp)
    .post("/sign-in", validateSchema(userSchema), signIn)
    .put("/", validateAuth, validateSchema(updateUserSchema), update);

export default router;