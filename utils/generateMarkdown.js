// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

##Installation
${data.installation}


##Usage
${data.usage}


##License
${data.license}


##Contributions
${data.contributions}


##Tests
${data.tests}


##Questions
Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}) 

`;
}

module.exports = generateMarkdown;
