const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const inquirer = require("inquirer");
const mysql=require("mysql2");
require("console.table");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: "3001",
  user: "root",
  password: "",
  database: "employeeDB",
},
console.log("Connected to employeeDB database:")
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

function initPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Select a choice.",
      choices: [
        "View Employee",
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
