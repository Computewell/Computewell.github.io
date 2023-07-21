import express from "express";
const router = express.Router();
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask
} from "../controllers/tasks.js";

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask).put(editTask);

export default router;
