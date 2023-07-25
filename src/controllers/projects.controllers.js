import { Project } from "../models/Project.js"
import { Task } from "../models/Task.js"


export const getProjects  = async (req, res) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const getOneProject = async (req, res) => {
  try {
    const { id } = req.params
    const project = await Project.findOne({
      where: {
        id: id
      }
    })
    if(!project) return res.status(404).json({message: "Project does not exist"})
    res.json(project)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const createProjects = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name, 
      priority, 
      description
    })
    res.json(newProject)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const updateProject = async (req, res) => {
  try {
    const { id } = req.params
    const { name, priority, description } = req.body 
    
    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    await project.save()
  
    res.json(project)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params
    await Project.destroy({
      where: {
        id: id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const getProjectsTasks = async (req, res ) => {
  const { id } = req.params
  const tasks = await Task.findAll({
    where: { projectId : id }
  })
  res.json(tasks)
}