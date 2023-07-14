import { Router } from "express";
const router = Router()
import { getProjects, createProjects, updateProject, deleteProject, getOneProject, getProjectsTasks } from "../controllers/projects.controllers.js";



router.get("/projects", getProjects)
router.post("/projects", createProjects)
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id", getOneProject)

router.get("/projects/:id/tasks", getProjectsTasks)




export default router;

