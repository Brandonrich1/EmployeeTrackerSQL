const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const cTable = require("console.table")
const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "Branndd!1",
    database: "employee_db"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id" + connection.threadId);
    startPrompting();
});

//app starting prompt
function startPrompting() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Delete Department", "Delete Role", "Delete Employee","EXIT"]
    }).then(function (answer) {
        console.log("You selected: " + answer.action);
//switch cases for functions to be called later
        switch (answer.action) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Delete Department":
                deleteDepartment();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            default:
                exit();
        }
    });
}
