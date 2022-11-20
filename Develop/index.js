// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'GitHub Username',
    name: 'gitHubUser',
  },
  {
    type: 'input',
    message: 'Your email address',
    name: 'email',
  },
  {
    type: 'input',
    message: "Project Title",
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description',
    name: 'description',        
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies? ',
    name: 'installCmd',        
  },  
  {
    type: 'input',
    message: 'Project Usage',
    name: 'usageDesc',        
  },          
  {
    type: 'list',
    message: 'Does your project need a License?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'ISC', 'None'],
  },
  {
    type: 'list',
    message: 'Is your project open to contributions?',
    name: 'contributionDesc', 
    choices: ['Yes', 'No'],       
  }, 
  {
    type: 'input',
    message: 'Command needed to Run test ',
    name: 'testCommand',        
  }  
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.log(err) : console.log("New MasterReadme.md file was successfully created!"));
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    const readmeContent = generateMarkdown(data);
    writeToFile('MasterReadme.md', readmeContent);
  });    
}

// Function call to initialize app
init();