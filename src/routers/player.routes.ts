import { Router } from "express";
import validateAuth from "@/middlewares/validateAuth";
import validateSchema from "@/middlewares/validateSchema";
import { updatePlayerSchema } from "@/schemas/player.schemas";
import { update, deleteById, find, count } from "@/controllers/player.controllers";

const router = Router();
router
    .get("/count", count)
    .all("/*", validateAuth)
    .get("/find-by", find)
    .patch("/", validateSchema(updatePlayerSchema), update)
    .delete("/", deleteById);

export default router;