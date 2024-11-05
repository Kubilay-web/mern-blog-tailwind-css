import express from "express";
import { subscribeUser } from "../controllers/subscribe.controller.js";

const router = express.Router();

router.post("/newsletter", subscribeUser);

export default router;
