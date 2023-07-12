import { Task } from "../models/Task.js"

export const getTasks = async (req, res) => {
  try {
    const tareas = await Task.findAll()
    res.json(tareas)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}



export const createTasks = async (req, res) => {
  try {
    const { name, done, projectId } = req.body
    const newTarea = await Task.create({
      name,
      done,
      projectId
    })
    res.json(newTarea)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}