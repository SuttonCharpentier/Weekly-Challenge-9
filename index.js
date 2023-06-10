// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    // User informations
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      // Title
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      // Description
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description about your project?',
      },
      // License
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BDS_3', 'None'],
    },
    // Command
      {
        type: 'input',
        name: 'command',
        message: 'What command should be run to install dependencies?',
        default: ['npm i'],
    },
    // Test
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        default: ['npm test'],
    },
    // Usage
      {
        type: 'input',
        name: 'usage',
        message: 'What does user need to know about using the repo?',
    },
    // Contributing
      {
        type: 'input',
        name: 'contributing',
        message: 'What does user need to know about contributing to the repo?',
      },
];

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
        const { username, email, license, command, test, title, description, usage, contributing } = answers;
        fs.writeFile('./README.md', generateMarkdown(answers) , err => {
            if (err) {
              console.error(err);
            }
          });
          console.log('Generating README.md file...');
        })
}
// Function call to initialize app
init();