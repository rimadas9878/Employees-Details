const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Adding the inquirer and fs packages
const inquirer = require('inquirer');
const fs = require('fs');

//List of questions 
console.log("Answer the below questions to create a Team")

const managerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'manager_name',
        message: 'Enter the name of the Team Manager',
        validate: (managerName) => {
            if(managerName === ''){
                return 'Please enter a name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'manager_employee_id',
        message: 'Enter the id of the Manager',
        validate: (managerId) => {
            if(managerId < 0){
                return 'Incorrect id entered'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'Enter the email address of the Team Manager',
        validate: (managerEmail) => {
            if(managerEmail === ''){
                return 'Please enter a valid email address'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'manager_office_phone_number',
        message: 'Enter the office phone number of the Team Manager',
        validate: (managerOfficeNumber) => {
            if(managerOfficeNumber < 0){
                return 'Please enter a valid phone number'
            }
            return true
        }
    },
    {
        type: 'list',
        name: 'engineer_or_intern',
        message: 'Would you like, an Engineer or an Intern to join the team' ,
        choices: ['Engineer', 'Intern', 'I don\'t want to add more people'],
        validate:(addEmployee) => {
            if(addEmployee === 'Engineer'){
                return engineerQuestion
            }
            else if(addEmployee === 'Intern'){
                return traineeQuestion
            }
            return false;
        }
     }
])


const engineerQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'engineer_name',
        message: 'Enter the name of the Engineer working in the project',
        validate: (engineerName) => {
            if(engineerName === ''){
                return 'Please enter a name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'engineer_employee_id',
        message: 'Enter the Id of the Engineer',
        validate: (engineerId) => {
            if(engineerId < 0){
                return 'Incorrect id entered'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'engineer_email',
        message: 'Enter the email address of the Engineer',
        validate: (engineerEmail) => {
            if(engineerEmail === ''){
                return 'Please enter a valid email address'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'git_details',
        message: 'Enter the GitHub Url of the Engineer',
        validate: (engineerGitDetails) => {
            if(engineerGitDetails === ''){
                return 'Please enter a valid gitHub address'
            }
            return true
        }
    },
])

const traineeQuestion = inquirer.prompt([
    {
        type: 'input',
        name: 'trainee_name',
        message: 'Enter the name of the trainee working in the project',
        validate: (traineeName) => {
            if(traineeName === ''){
                return 'Please enter a valid name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'trainee_employee_id',
        message: 'Enter the Id of the trainee',
        validate: (traineeId) => {
            if(traineeId === ''){
                return 'Incorrect id entered'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'trainee_email',
        message: 'Enter the email address of the trainee',
        validate: (traineeEmail) => {
            if(traineeEmail === ''){
                return 'Please enter a valid email address'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'trainee_school',
        message: 'From which school did you Graduated?',
        validate: (traineeSchool) => {
            if(traineeSchool === ''){
                return 'Please enter a School'
            }
            return true
        }
    },
])
