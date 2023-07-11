import { Router } from "express";
const router = Router()
import { getProjects, createProjects, updateProject, deleteProject, getOneProject } from "../controllers/projects.controllers.js";



router.get("/projects", getProjects)
router.post("/projects", createProjects)
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id", getOneProject)




export default router;

