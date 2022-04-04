// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub Username (Required)",
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      }
      else {
        console.log("Please enter your Username!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: emailInput => {
      if (emailInput) {
        return true;
      }
      else {
        console.log("Please enter your email address!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project (Required)",
    validate: titleInput => {
      if (titleInput) {
        return true;
      }
      else {
        console.log("Please enter a title!");
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project. (Select one)",
    choices: ["CC0", "MIT", "Apache", "GPL"]
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for your project:"
  },
  {
    type: "imput",
    name: "contribution",
    message: "Enter contribution guidelines for your project:"
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for your project:"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) =>{
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(readmeData => {
    return generateMarkdown(readmeData);
  })
  .then(markdown => {
    return writeToFile("./dist/README.md", markdown);
  })
  .then(writeToFileResponse => {
    console.log(writeToFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
