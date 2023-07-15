import Task from "../models/Tasks.js";

// @desc    Get all tasks
const getAllTasks = (req, res) => res.send("get all tasks");

const createTasks = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTasks = (req, res) => res.json({ id: req.params.id });

const updateTasks = (req, res) => res.send("update a new task");

const deleteTasks = (req, res) => res.send("delete task");

export { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks };
