const express = require("express");
const routes = require("/routes");
const sequelize = require("./config/connection");
const inquirer = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

function initPrompt(){
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
      case "View Employee":
        viewEmployee();
        break;
        case "View by Department":
            ViewbyDepartment();
            break;
    }
  });
}
