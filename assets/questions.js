// questions for all inquirer prompts
const questions = {
  menu: [
    {
      type: "list",
      name: "menu",
      message: "What would you like to do: ",
      choices: [
        "View Depts",
        "View Roles",
        "View Employees",
        "Add Dept",
        "Add Role",
        "Add Employee",
        "Update Employee",
        'Delete Dept',
        'Delete Role',
        'Delete Employee'
      ],
    },
  ],
  viewDept: [
    {
      type: "list",
      name: "viewDept",
      message: "How would you like to view the Departments: ",
      choices: ["View without Dept Budget", "View with Dept Budget"],
    },
  ],

};

// export for root index.js
module.exports = questions;
