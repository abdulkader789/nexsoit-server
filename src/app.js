import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from './db/connect.js';



const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static('../public'));
app.use(cookieParser())


//routes import
// import userRouter from './routes/user.routes.js'
import contactRouter from './routes/contact.routes.js'





//routes declaration
// app.use("/api/v1/users", userRouter)
app.use("/api/v1/contact", contactRouter)

// New root route for Vercel deployment
// app.get("/", (req, res) => {
//     res.send("Server is running on Vercel!");
// });

// http://localhost:8000/api/v1/users/register

const port = process.env.PORT || 3000;

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URL);
//         app.listen(port, () => console.log(`Server is running on port ${port}`));
//     } catch (error) {
//         console.log(error);
//     }
// }

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
};

start();

export { app };
