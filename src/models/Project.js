// modelado de tablas
import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // para que se genere por si solo
  },
  name : {
    type: DataTypes.STRING
  },
  priority: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false // para no ver campos automaticos create y update
});



Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id'
})

Task.belongsTo(Project, {
  foreignKey:"projectId",
  targetId: "id"
}) 