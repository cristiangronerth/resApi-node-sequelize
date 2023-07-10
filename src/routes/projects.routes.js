import { Router } from "express";
const router = Router()
import { getProjects, createProjects } from "../controllers/projects.controllers.js";



router.get("/projects", getProjects)
router.post("/projects", createProjects)
router.put("/projects/:id")
router.delete("/projects/:id")
router.get("/projects/:id")




export default router;

