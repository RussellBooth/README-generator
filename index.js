// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['title', 'description', 'installation', 'usage', 'license', 'githubUsername', 'email'];

// TODO: Create a function to write README file
function writeToFile(fileName, generateMarkdown) {
    fs.writeFile(fileName, generateMarkdown, err =>
        err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'title',
                message: 'What is the Title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short Description of your project. You man choose to include: its motivation, what does it solve, what did you learn, or why you built it.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Are there any steps required to install your project?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are the instructions or examples for use?'
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is your githubUsername?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'list',
                message: 'What license would you like to use?',
                name: 'license',
                choices: ['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense', 'No License']
            }
        ])
        .then(data => {
            const fileName = `${data.githubUsername}.md`;

            const generateREADME = generateMarkdown(data); 
            
            writeToFile(fileName, generateREADME);
        })
}

// Function call to initialize app
init();
