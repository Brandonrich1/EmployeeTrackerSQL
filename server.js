const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const cTable = require("console.table")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user:"root",
    password: "Branndd!1",
    database: "employees_db"
})

prompt({
    name:"doWhat",
    type: "list",
    message: "What are you trying to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "Add Role", "View all Roles", "View All Departments", "Add Department", "Quit"]
}).then((answer) => {
switch(answer.doWhat) {
    case "View All Employees": 
        console.log("View all Employees")
        break;
    case "View All Employees": 
        console.log("Add Employee")
        break;    
    case "Add Employee": 
        console.log("Add Employee")
        break;    
    case "Update Employee Role": 
        console.log("Update Employee Role")
        break;
    case "Add Role": 
        console.log("Add Role")
        break;
    case "View all Roles" :
        console.log("View all Roles")
        break;
    case "View All Departments": 
        console.log("View All Departments")
        break;
    case "Add Department": 
        console.log("Add Department")
        break;
    default: 
        console.log("Quitting");
        break;
}
})