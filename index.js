// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

const readmeFilePath = './output/README.md';

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?: ",
    "What is the description?: ",
    "Install instructions?: ",
    "Usage information?: ",
    "Contribution guidelines?: ",
    "Test instructions?: ",
    "Which license will you be using?: ",
    "What is your GitHub username?: ",
    "What is your email address?: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: README File Generated!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing',
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: [
                "MIT License",
                "Apache License 2.0",
                "GNU General Public License v3.0",
            ]
        },
        {
            type: 'input',
            message: questions[7],
            name: 'gitHubUser',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    .then((response) => {
        const prompt = {
            title: response.title,
            description: response.description,
            install: response.install,
            usage: response.usage,
            contribution: response.contribution,
            testing: response.testing,
            license: response.license,
            gitHubUser: response.gitHubUser,
            email: response.email,
        }

        //console.log(prompt);

        const readmeText = markdown.generateMarkdown(prompt);

        //console.log(readmeText);

        writeToFile(readmeFilePath, readmeText);

    });
}

// Function call to initialize app
init();
