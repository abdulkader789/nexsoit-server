import mongoose, { Schema } from "mongoose";

// Define the contact schema
const contactSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

// Create a model from the contact schema
export const Contact = mongoose.model('Contact', contactSchema);


