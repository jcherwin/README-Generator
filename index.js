// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

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
    fs.writeFile('./output/README.md', "hello world", (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: HTML File Generated!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
