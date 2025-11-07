import express from "express";
import { postOrder } from "../controllers/ordersController.js";

const router = express.Router();
router.post("/", postOrder);

export default router;
