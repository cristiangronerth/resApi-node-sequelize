// va a tener la configuración de express
import express from "express";
const app = express();
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


// middleware
app.use(express.json())



app.use(projectsRoutes)
app.use(tasksRoutes)



export default app;