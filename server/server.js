import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json()); 

// Connect to Database
await connectDB();

// Routes
app.use("/api/user", userRouter); 
app.use("/api/image", imageRouter);

// Test Route
app.get("/", (req, res) => res.send("API Working"));



// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
