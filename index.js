const db = require('./db');
const inquirer = require('inquirer');
const questions = require('./assets/questions');

inti();
// init function to initialize program
function inti() {
  // add logo process

  console.log('Welcome to the Employee Management System');
  // start main menu prompt
  menu();
}

// menu function with all main prompt options -- async
async function menu() {
  const option = await inquirer.prompt(questions.menu);

  switch (option.menu) {
    case 'View Depts':
      viewDepts();
      break;
    case 'View Roles':
      // call view dept
      break;
    case 'View Employees':
      allEmp();
      break;
    case 'Search Employees':
      empsBy();
      break;
    case 'Add Dept':
      // call view dept
      break;
    case 'Add Role':
      // call view dept
      break;
    case 'Add Employee':
      // call view dept
      break;
    case 'Update Employee':
      // call view dept
      break;
    case 'Delete Dept':
      // call view dept
      break;
    case 'Delete Role':
      // call view dept
      break;
    case 'Delete Employee':
      // call view dept
      break;
    default:
      db.end();
      break;
  }
}

// View Depts -- all
async function viewDepts() {
  const action = await inquirer.prompt(questions.viewDept);
  let data;
  if (action.viewDept === 'View without Dept Budget') {
    data = await db.viewDept();
  } else {
    data = await db.viewDeptBudget();
  }
  console.table(data);
  console.log(`\n`);
  menu();
}
// view all employees
async function allEmp() {
  const data = await db.viewEmpMan();
  console.table(data);
  console.log(`\n`);
  menu();
}
// Search Emps by -- options and action callbacks ****************
async function searchEmps() {
  try {
    const action = await inquirer.prompt(questions.searchEmp);
    let data;
    let array;
    let obj; 
    // TODO:  refactor into if/else?????
    switch (action.viewEmp) {
      case 'manager_id':
        data = await db.viewEmp();
        array = data.map((manager) => ({
          name: `${manager.first_name} ${manager.last_name}`,
          value: manager.id,
        }));
        break;
      case 'role_id':
        data = await db.viewRoles();
        array = data.map((role) => ({ name: role.title, value: role.id }));
        break;
      case 'dept_id':
        data = await db.viewRoles();
        array = data.map((dept) => ({
          name: dept.department,
          value: dept.dept_id,
        }));
        break;
      default:
        menu();
        break;
    }
    // present the obj choices
    const search = await inquirer.prompt([
      {
        type: 'list',
        name: 'id',
        message: `Which ${by}?`,
        choices: array,
      },
    ]);

    obj[action.viewEmp] = search.id;
    console.log(obj);
    const result = await db.viewEmpBy(obj);
    console.log("Displaying Search Results: \n");
    console.table(result);
    menu();

  } catch (err) {
    console.log(err);
  }
}
// view all employees by option
// async function empsBy(){
//     try{
//         const action = await inquirer.prompt(questions.)
//     }
// }
