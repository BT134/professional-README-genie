//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./utils/generateMarkdown');

//Create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//An array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? (Required)',
        // We need to validate that user entered at least one word
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("You must enter a GitHub username.");
          }
          return true;
      }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        // We need to validate that user entered at least one word
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("You must enter the name of your GitHub repository.");
          }
          return true;
      } 
      },
      {
        type: 'input',
        name: 'project',
        message: "What is your project's name? (Required)",
        // We need to validate that user entered at least one word
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("You must enter the title of your project.");
          }
          return true;
      }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'Mozilla-Public', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
      },
   
  ];
  
//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Generating README...")
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
      let readmeContent = markdown.generateMarkdown(response)
  console.log(response);
  writeToFile('README.md', readmeContent)
  }
)}

// Function call to initialize app
init();
