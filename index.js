const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/generateTeam');

//Adding the inquirer and fs packages
const inquirer = require('inquirer');
const fs = require('fs');
const emploeeDB = []
//List of questions 
console.log("Answer the below questions to create a Team")

const managerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager_name',
            message: 'Enter the name of the Team Manager',
            validate: (managerName) => {
                if (managerName === '') {
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
                if (managerId < 0) {
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
                if (managerEmail === '') {
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
                if (managerOfficeNumber < 0) {
                    return 'Please enter a valid phone number'
                }
                return true
            }
        }

    ]).then(({ manager_name, manager_employee_id, manager_email, manager_office_phone_number }) => {
        const newManager = new Manager(manager_name, manager_employee_id, manager_email, manager_office_phone_number)
        emploeeDB.push(newManager)
        enginerOrInternOrExit()
    })
}

function enginerOrInternOrExit() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'engineer_or_intern',
            message: 'Would you like, an Engineer or an Intern to join the team',
            choices: ['Engineer', 'Intern', 'I don\'t want to add more people'],
        }]).then(({ engineer_or_intern }) => {

            if (engineer_or_intern === 'Engineer') {
                engineerQuestion()
            }
            else if (engineer_or_intern === 'Intern') {
                internQuestion()
            } else {
                fs.writeFileSync("./dist/index.html",generateTeam(emploeeDB),function(err){
                    if(err) throw err;
                })
                console.log(emploeeDB, "Team HTML generation complete");
            }


        })

}

const engineerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer_name',
            message: 'Enter the name of the Engineer working in the project',
            validate: (engineerName) => {
                if (engineerName === '') {
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
                if (engineerId < 0) {
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
                if (engineerEmail === '') {
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
                if (engineerGitDetails === '') {
                    return 'Please enter a valid gitHub address'
                }
                return true
            }
        },
    ])
        .then(({ engineer_name, engineer_employee_id, engineer_email, git_details }) => {
            const newEngineer = new Engineer(engineer_name, engineer_employee_id, engineer_email, git_details)
            emploeeDB.push(newEngineer)
            enginerOrInternOrExit()
        })
}

const internQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern_name',
            message: 'Enter the name of the intern working in the project',
            validate: (internName) => {
                if (internName === '') {
                    return 'Please enter a valid name'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'intern_employee_id',
            message: 'Enter the Id of the intern',
            validate: (internId) => {
                if (internId === '') {
                    return 'Incorrect id entered'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'intern_email',
            message: 'Enter the email address of the intern',
            validate: (internEmail) => {
                if (internEmail === '') {
                    return 'Please enter a valid email address'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'intern_school',
            message: 'From which school did you Graduated?',
            validate: (internSchool) => {
                if (internSchool === '') {
                    return 'Please enter a School'
                }
                return true
            }
        },
    ])
        .then(({ intern_name, intern_employee_id, intern_email, intern_school }) => {
            const newintern = new Intern(intern_name, intern_employee_id, intern_email, intern_school)
            emploeeDB.push(newintern)
            enginerOrInternOrExit()
        })
}

managerQuestion();