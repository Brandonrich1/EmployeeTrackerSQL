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
// Functions for Adding dept,employee, role 
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "Enter name of department:",
        name: "deptName"
    }).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function (err, res) {
            if (err) throw err;
            console.table(res)
            console.log("Successfully added Department!");
            startPrompting();
        })
    });
}
function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "Enter role:",
        name: "roleName"
    },
    {
        type: "input",
        message: "Enter role salary:",
        name: "annualSalary"
    },
    {
        type: "input",
        message: "Enter department ID:",
        name: "deptID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.roleName, answer.annualSalary, answer.deptID], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added Role!");
            startPrompting();
        });
    });
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Enter first name of new employee:",
        name: "firstName"
    },
    {
        type: "input",
        message: "Enter last name of new employee:",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter employee's role ID:",
        name: "roleID"
    },
    {
        type: "input",
        message: "Enter employee's manager ID:",
        name: "managerID"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Successfully added New Employee!");
            startPrompting();
        });
    });
}
