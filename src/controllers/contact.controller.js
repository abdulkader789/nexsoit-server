import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {Contact} from "../models/contact.model.js"; // Import the Contact model
import { ApiResponse } from "../utils/ApiResponse.js"; // Import ApiResponse
import mongoose from "mongoose";

// Controller to handle creating a new contact
const createContact = asyncHandler(async (req, res) => {
    const { fullName, email, phone, message } = req.body; // Destructure required fields from request body

    // Validate if all required fields are provided
    if (!fullName || !email || !phone || !message) {
        throw new ApiError(400, "All fields are required");
    }

        // Create a new contact instance
        const newContact = await Contact.create({
            fullName,
            email,
            phone,
            message
        });
        console.log(newContact)

        // Respond with success message and the newly created contact object
      
        return res.status(200).json(
            new ApiResponse(200, newContact, "Contact information created Successfully")
        )
   
})

// Export the controller functions
export { createContact };

