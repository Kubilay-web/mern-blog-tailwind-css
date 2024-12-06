import express from "express";
import {
  createPayment,
  getPayments,
} from "../controllers/PaymentController.js";

const router = express.Router();

router.post("/create", createPayment);
router.get("/", getPayments);

export default router;
