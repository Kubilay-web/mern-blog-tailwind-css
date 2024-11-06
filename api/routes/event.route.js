import express from "express";
import { getEvents, createEvent } from "../controllers/events.controller.js";

const router = express.Router();

router.get("/events", getEvents);
router.post("/events", createEvent);

export default router;
