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
        viewRoles();
      } else if (res.action === "View Employees") {
      } else if (res.action === "Add A Department") {
      } else if (res.action === "Add a Role") {
      } else if (res.action === "Add an Employee") {
      } else if (res.action === "Update Employee Role") {
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
        console.table(role);
        menu();
    });
}
function viewEmployee() {
    db.query("Select * from employee", (error, data) => {
        console.table(emp);
        menu();
    })
}

menu();

// add department

{type: "input",
message: "What is the department name?",
name: "dept"
}

//add role

{type: "input",
message: "What is the name of the role?",
name: "role"
},

{type: "input",
message: "What is the role's salary?",
name: "salary"
}

{type: "list",
message: "What is the department this role belongs to?",
name: "dept"
choices: [
    ""
]
}

//add employee

{
    message: "What is the employee first name?",
    name: "firstname",
    type: "input"
},
{
    message: "What is the employee last name?",
    name: "lastname",
    type: "input"
},
{
    message: "What is the employee role?",
    name: "emp_role",
    type: "list",
    choices: []
},
{
    message: "Who is the manager of this employee?",
    name: "emp_manager",
    type: "list",
    choices: []
}
