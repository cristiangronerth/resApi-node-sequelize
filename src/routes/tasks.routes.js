import { Router } from "express";
import {
  createTasks,
  deleteTasks,
  getOneTask,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controllers.js";
const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);
router.get("/tasks/:id", getOneTask);

export default router;
