import express from "express";
import { protectRouter } from "../middleware/auth.protectRouter.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router=express.Router();
router.get("/users",protectRouter, getUsersForSidebar);
router.get("/:id",protectRouter,getMessages);
router.post("/send/:id",protectRouter,sendMessage);

export default router;