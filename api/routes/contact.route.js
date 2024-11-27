import express from "express";
import {
  submitContactForm,
  getContactForms,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/contact", submitContactForm);
router.get("/get/contact", getContactForms);

export default router;
