import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tareas = await Task.findAll();
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTarea = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTarea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params
  try {
    const tarea = await Task.findOne({
      where: {id},
      // attributes: ['name', 'projectId']
    })
    res.json(tarea)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; 

export const updateTasks = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOne({
      where: {id}
    })
    task.set(req.body)
    await task.save()
    return res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteTasks = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Task.destroy({
      where: {id}
    })
    console.log(result);
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
