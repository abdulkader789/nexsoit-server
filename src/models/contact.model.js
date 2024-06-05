import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

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
            type: Number,
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
)