// encargado de arrancar la aplicacion
import app from "./app.js"
import { sequelize } from "./database/database.js"
//import "./models/Project.js"
//import "./models/Task.js"



async function main(){
  try {
    await sequelize.sync({force: false}) 
    console.log('Connection has been established successfully.');
    app.listen(4000)
    console.log("Server is listening on port", 4000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


main()

// La rama principal en este proyecto es Master