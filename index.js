import express from "express";
import path from "path";

const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Serve the index.jsx file as the root file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
