import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";

import multer from "multer";

const upload = multer({storage: multer.memoryStorage()});

const router = express.Router();

router.post("/",)


export default router;