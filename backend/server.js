import connectDB  from "./db/connect.js";
import express from "express";
import dotenv from "dotenv";
import tasks from "./routes/tasks.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => res.send("Task Manager App"));
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running at http://localhost:${port}...`));
  
  } catch (error) {
    console.log(error);
  }
}

start();


// Path: Backend\routes\controllers\tasks.js REST API
// app.get('/api/v1/tasks/')  - Get all tasks
// app.post('/api/v1/tasks/') - Create a new task
// app.get('/api/v1/tasks/:id') - Get a single task
// app.patch('/api/v1/tasks/:id') - Update a task
// app.delete('/api/v1/tasks/:id') - Delete a task

// MongoDB Atlas
// NO SQL, Non relational Database
// Store JSON
// Dynamic mongoose Schema
//
