import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Route to create a new contact
router.route("/create-contact").post(createContact)

export default router;
