const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();
require("console.table");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Connected to employeeDB database: 3001")
);

const PORT = process.env.PORT || 3001;

function initPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Select a choice.",
      choices: [
        "View Employees",
        "View by Department",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role to:",
        "Create a New Role:",
        "End",
      ],
    })
    .then(function ({ task }) {
      switch (task) {
        case "View Employees":
          viewEmployee();
          break;

        case "View by Department":
          viewByDepartment();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Role":
          updateRole();
          break;

        case "Add Role":
          addRole();
          break;

        case "End":
          connection.end();
          break;
      }
    });
}

function viewEmployee() {
  console.log("Viewing all employees...\n");
  const sql = "SELECT * FROM employee";
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
}

function viewByDepartment() {
  console.log("Viewing employees by department...\n");
  inquirer
    .prompt({
      type: "list",
      name: "department",
      message: "Select a department:",
      choices: ["Sales", "Engineering", "Finance", "Legal"],
    })
    .then(function ({ department }) {
      const sql = " SELECT * FROM employees WHERE department = ?";
      db.query(sql, [department], function (err, res) {
        if (err) throw err;
        console.table(res);
        initPrompt();
      });
    });
}

function addEmployee() {
  console.log("Create a new employee...\n");
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter First Name:",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter Last Name",
      },
      {
        type: "list",
        name: "role_id",
        message: "Choose their role:",
        choices: [
          { name: "Sales" },
          { name: "Engineering" },
          { name: "Finance" },
          { name: "Legal" },
        ],
      },
    ])
    .then(function ({ first_name, last_name, role_id, manager_id }) {
      const sql =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id)";
      const params = [first_name, last_name, role_id, manager_id];
      db.query(sql, params, function (err, res) {
        if (err) throw err;
        console.log(`\n${first_name}${last_name} added to database`);
        initPrompt();
      });
    });
}
initPrompt();
