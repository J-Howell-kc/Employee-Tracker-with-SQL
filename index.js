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
        console.table(data);
        menu();
    });
}
function viewEmployee() {
    db.query("Select * from employee", (error, data) => {
        console.table(data);
        menu();
    })
}

menu();
