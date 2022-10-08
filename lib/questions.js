const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'manager_name',
        message: 'Enter the name of the Team Manager',
    },
    {
        type: 'input',
        name: 'manager_employee_id',
        message: 'Enter the employee id of the Manager',
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'Enter the email address of the Team Manager',
    },
    {
        type: 'input',
        name: 'manager_phone_number',
        message: 'Enter the phone number of the Team Manager',
    },
])

const engineerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'engineer_name',
        message: 'Enter the name of the Engineer working in the project',
    },
    {
        type: 'input',
        name: 'engineer_employee_id',
        message: 'Enter the employee id of the Engineer',
    },
    {
        type: 'input',
        name: 'engineer_email',
        message: 'Enter the email address of the Engineer',
    },
    {
        type: 'input',
        name: 'engineer_phone_number',
        message: 'Enter the phone number of the Engineer',
    },
    {
        type: 'input',
        name: 'git_details',
        message: 'Enter the git url of the Engineer',
    },
])

const traineeQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'trainee_name',
        message: 'Enter the name of the trainee working in the project',
    },
    {
        type: 'input',
        name: 'trainee_employee_id',
        message: 'Enter the employee id of the trainee',
    },
    {
        type: 'input',
        name: 'trainee_email',
        message: 'Enter the email address of the trainee',
    },
    {
        type: 'input',
        name: 'trainee_school',
        message: 'Enter the trainees school details',
    },
])


