// questions for all inquirer prompts
const questions = {
  // main menu
  menu: [
    {
      type: 'list',
      name: 'menu',
      message: 'What would you like to do: ',
      choices: [
        'View Depts',
        'View Roles',
        'View Employees',
        'Add Dept',
        'Add Role',
        'Add Employee',
        'Update Employee',
        'Delete Dept',
        'Delete Role',
        'Delete Employee',
        'Exit'
      ],
    },
  ],
  viewDept: [
    {
      type: 'list',
      name: 'viewDept',
      message: 'How would you like to view the Departments: ',
      choices: ['View without Dept Budget', 'View with Dept Budget'],
    },
  ],
  viewEmp: [
    {
      type: 'list',
      name: 'viewEmp',
      message: 'How would you like to view the employees: ',
      choices: [
        'view all employees',
        'view by manager',
        'view by role',
        'view by dept',
      ],
    },
  ],
  addDept: [
    {
      type: 'input',
      name: 'dept-name',
      message: 'What is the name of the department: ',
    },
  ],
  addRole: [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the new role: ',
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the salary for the role: (commas unnecessary) ',
    },
  ],
  addEmp: [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employees first name: ',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employees last name: ',
    },
  ],
  updateEmp: [
    {
      type: 'list',
      name: 'update',
      message: 'What would you like to update: ',
      choices: ['update employee role', 'update employee manager'],
    },
  ],
};

// export for root index.js
module.exports = questions;
