// Variables
const dateOb = new Date();
const year = dateOb.getFullYear();

// Returns a license badge based on which license is passed in if there is no license, return an empty string
function renderLicenseBadge(license) {
 return license === 'None' ? ' ' : `![License](https://img.shields.io/badge/License-${license}-green.svg)\n`
}

// Returns the license link  if there is no license, return an empty string
function renderLicenseLink(license) {
  return license === 'None' ? ' ' : `${'Follow link for more informations'}  https://opensource.org/licenses/${license.replace('_', '-')}\n`
}

// Returns the license section of README if there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None' ? ' ' : `
## License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
 This project is licensed under the ${license.replace('_', ' ')} license.
Licensed under the ${license.replace('_', ' ')} License.
you may not use this file except in compliance with the License.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br>    
${renderLicenseSection(data.license)}

## Description

${data.description}

## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Test](#test)
  
  * [Questions](#questions)
     
## Installation
  To install necessary dependencies, run the following command:

     ${data.command}

## Usage

${data.usage}


## Contributing

${data.contributing}

## Test

To run the test, run the following command:

    ${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me direcly at ${data.email}.
You can find more of my work at https://github.com/${data.username}.  

©${year} ${data.username.toUpperCase()}. Confidential and Proprietary. All Rights Reserved.
`;
}

module.exports = generateMarkdown;