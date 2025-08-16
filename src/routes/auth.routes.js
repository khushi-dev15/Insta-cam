import express from "express";
import { registerController,logincontroller } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",registerController)
router.post("/login",logincontroller)

export default router;