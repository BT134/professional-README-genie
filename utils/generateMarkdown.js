// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage-information)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  > ${data.description}

  ## Installation:
  > To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage Information:
  > ${data.usage}

  ## License:
  > Licensed under ${data.license}
  ## Contributing:

  > ${data.contribution}
  ## Testing:
  > To run tests, run the following command:
 \`\`\`
  ${data.test}
 \`\`\`

  ## Questions:
  > For additional help or questions please contact me ${data.email}

  > Find and follow me on Github: [${data.github}](https://github.com/${data.github})`
};

module.exports = { generateMarkdown };
