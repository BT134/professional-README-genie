//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//An array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
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


    ]);
  };
  
  const generateREADME = (answers) =>
  `# ${answers.project}
  
  ## License:
  [![license](https://img.shields.io/badge/license-${answers.license}-blue)](https://shields.io)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage-information)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  > ${answers.description}

  ## Installation:
  > To install necessary dependencies, run the following command:
  \`\`\`
  ${answers.installation}
  \`\`\`

  ## Usage Information:
  > ${answers.usage}

  ## License:
  > Licensed under ${answers.license}
  ## Contributing:

  > ${answers.contribution}
  ## Testing:
  > To run tests, run the following command:
 \`\`\`
  ${answers.test}
 \`\`\`

  ## Questions:
  > For additional help or questions please contact me ${answers.email}

  > Find and follow me on Github: [${answers.github}](https://github.com/${answers.github})`;


//Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
      .then(() => console.log('Generating README...'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();

