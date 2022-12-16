const inquirer = require("inquirer");
const mysql = require("mysql2");
const ctable = require("console.table");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: process.env.PW,
    database: "employeelist_db",
  },
  console.log(`Connected to the employeelist database.`)
);

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add A Department",
          "Add a Role",
          "Add an Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then((res) => {
      if (res.action === "View Departments") {
        viewDepartment();
      } else if (res.action === "View Roles") {
        viewRole();
      } else if (res.action === "View Employees") {
        viewEmployees();
      } else if (res.action === "Add A Department") {
        addDepartment();
      } else if (res.action === "Add a Role") {
        addRole();
      } else if (res.action === "Add an Employee") {
        addEmployee();
      } else if (res.action === "Update Employee Role") {
        updateEmployeeRole();        
      }
    });
}
function viewDepartment() {
  db.query("Select * from department", (error, data) => {
    console.table(data);
    menu();
  });
}
function viewRole() {
    db.query("Select * from role", (error, data) => {
        console.table(data);
        menu();
    });
}
function viewEmployees() {
    db.query("Select * from employee", (error, data) => {
        console.table(data);
        menu();
    })
}

menu();

// // add department
function addDepartment () {
    inquirer.prompt([
        {type: "input",
        message: "What is the department name?",
        name: "dept"
        }
    ]) .then(res => {
        db.query('INSERT INTO department (name) VALUES (?)' , [res.dept], (error,data) => {
            console.table(data)
            menu();
        })
    })
}
 

// //add role
function addRole () {
    inquirer.prompt([
        {type: "input",
        message: "What is the role name?",
        name: "title"
        }, 
         {type: "input",
        message: "What is the role's salary?",
        name: "salary"
        },
        {type: "input",
        message: "What is the role's department?",
        name: "department_id"
        }
    ]) .then(res => {
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)' , [res.title, res.salary, res.department_id], (error,data) => {
            console.table(data)
            menu();
        })
    })
}



// //add employee

function addEmployee () {
    inquirer.prompt([
        {type: "input",
        message: "What is their first name?",
        name: "first_name"
        }, 
         {type: "input",
        message: "What is their last name?",
        name: "last_name"
        },
        {type: "input",
        message: "What is the role ID?",
        name: "role_id"
        },
        {type: "input",
        message: "What is their Manager's ID?",
        name: "manager_id"
        }
    ]) .then(res => {
        db.query('INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)' , [res.first_name, res.last_name, res.role_id, res.manager_id], (error,data) => {
            console.log(error)
            console.table(data)
            menu();
        })
    })
}

//update employee

