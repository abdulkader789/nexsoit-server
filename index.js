import express from "express";
import path from "path";
import { app } from './src/app.js';  // Import app.js from src
import { fileURLToPath } from 'url'; // Import the fileURLToPath function

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the directory name from the file's path
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory

console.log('__filename: ',__filename)
console.log('__direname: ', __dirname)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
