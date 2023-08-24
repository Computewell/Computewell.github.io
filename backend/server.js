import connectDB from "./db/connect.js";
import express from "express";
import dotenv from "dotenv";
import tasks from "./routes/tasks.js";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// Port configuration
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Server running at http://localhost:${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
