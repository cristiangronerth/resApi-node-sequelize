import { Router } from "express";
import { createTasks, getTasks } from "../controllers/tasks.controllers.js";
const router = Router()



router.get("/tasks", getTasks)
router.post("/tasks", createTasks)
router.put("/tasks/:id")
router.delete("/tasks/:id")
router.get("/tasks/:id")



export default router;
