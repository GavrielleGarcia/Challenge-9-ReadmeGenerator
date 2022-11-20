// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Insert Title",
        name: "Title"
    }, {
        type: "input",
        message: "Describe your project",
        name: "Description"
    
    }, {
        type: "input",
        message: "Explain the user what needs to be installed before running the app",
        name: "Installation"

    }, {
        type: "input",
        message: "Advise the user how to use the app",
        name: "Usage"
    
    }, {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contributing"

    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"

    }, {
        type: "input",
        message: "Your Name",
        name: "Questions"

    }, {
        type: 'input',
        message: 'Insert your Github username',
        name: 'Username'

    }, {
        type: 'input',
        message: 'Your email',
        name: 'Email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.log(err) : console.log("New proREADME.md file was successfully created!"));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        const readmeContent = generateMarkdown(data);
        writeToFile('.Files', readmeContent);
        console.log(data);
    });
}

// Function call to initialize app
init();