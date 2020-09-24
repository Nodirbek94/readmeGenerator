const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title"
    },
    {
        type: "input",
        name: "description",
        message: "Please write short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information"
    },
    {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: [
            "MIT",
            "ISC",
            "GNU-Library",
            "Unlicensed",
            "Apache 2.0"
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "Plese enter contribution guidelines"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions"
    },
    {
        type: "input",
        name: "github",
        message: "Plese enter your Github user name"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email"
    }
];

function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFileSync(fileName, data);
};

function init() {
    inquirer.prompt(questions).then(function(answers){
        writeToFile("NewReadMe.md", generateMarkdown(answers));
    })
};

init();
