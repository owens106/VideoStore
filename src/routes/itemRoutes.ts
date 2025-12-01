import { Router } from "express";
import { createItem, getItems, getItemById } from "../controllers/itemController";

const router = Router();

router.get("/", getItems);

router.post("/", createItem);

router.post("/byName", getItemById)

export default router;
