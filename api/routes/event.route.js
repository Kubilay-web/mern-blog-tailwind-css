import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";

const router = express.Router();

router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:eventId", updateEvent);
router.delete("/events/:eventId", deleteEvent);
export default router;
