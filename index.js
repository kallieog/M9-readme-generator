// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const path = require("path");
const questions = [
    {type: "input", name: "title", message: "Please enter the title of your project"},
    {type: "input", name: "description", message: "Describe your project"},
    {type: "list", name: "license", message: "Select your license", choices: ["MIT", "GPL", "BSD", "APACHE 2.0"]},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, "/dist/", fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => writeToFile("README.md", generateMarkdown(answers)))
}

// Function call to initialize app
init();
