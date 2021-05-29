const db = require('./db');
const inquirer = require('inquirer');
const questions = require('./assets/questions')

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
            // call view dept
            break;
        case 'View Roles':
            // call view dept
            break;
        case 'View Employees':
            // call view dept
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