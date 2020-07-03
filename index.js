// npm packages 
const fs = require("fs");
const inquirer = require("inquirer");

// Questions to the user 
inquirer
    .prompt([
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is your Github Username?',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            default: 'N/A'
        },
        {
            type: 'editor',
            name: 'description',
            message: 'What is your project about?',
            default: 'N/A'
        },
        {
            type: 'editor',
            name: 'install',
            message: 'How does this project get installed?',
            default: 'N/A'
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'Define a usage example.',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'licence',
            message: 'Specify a license with (name)[url] syntax.',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who were the project contributors?',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests did you complete?',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What sort of questions remain to solve?',
            default: 'N/A'
        }
    ])
    .then(res => {
        // console.log(`
        //     ${res.gitUser}
        //     ${res.title}
        //     ${res.description}
        //     ${res.install}
        //     ${res.usage}
        //     ${res.licence}
        //     ${res.contribute}
        //     ${res.tests}
        //     ${res.questions}
        // `);

        // "Hard coded framework for readme"
        const readmeContent = `
        # ${res.title}

        ## Table of Contents
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)

        ---

        ## Description
        ${res.description}

        ---

        ## Installation
        ${res.install}

        ---

        ## Usage
        ${res.usage}

        ---

        ## License
        ${res.licence}

        ---

        ## Contributing
        ${res.contribute}

        ---

        ## Tests
        ${res.tests}

        ---

        ## Questions
        ${res.questions}

        ---

        ### Profile: github.com/${res.gitUser}
        
        ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
        `;

        fs.writeFile("customREADME.md", readmeContent, err => {
            if (err) throw err;

            console.log("You created a readme!")
        })

    });










// Original Provided Code //

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

// [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)