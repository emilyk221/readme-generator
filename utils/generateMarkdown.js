// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badge = "";
  if (license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return badge;
  }
  else if (license === "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return badge;
  }
  else if (license === "GPL") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return badge;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  let link = "";
  if (license === "MIT") {
    link = `[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)`;
    return link;
  }
  else if (license === "Apache") {
    link = `[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
    return link;
  }
  else if (license === "GPL") {
    link = `[https://www.gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)`;
    return link;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  if (!license) {
    return "";
  }

  if (license === "MIT") {
    return `
    Copyright ${new Date().getFullYear()} by ${username}.

    Licensed under the ${license} license.
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    `;
  }
  else if (license === "Apache") {
    return `
    Copyright ${new Date().getFullYear()} by ${username}.

    Licensed under the ${license} license.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License the link below.
    `;
  }
  else if (license === "GPL") {
    return `
    Copyright ${new Date().getFullYear()} by ${username}.
    
    Licensed under the ${license} license.
    This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    `;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license, data.username)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Please visit my GitHub profile [here](https://github.com/${data.username}) for more information about this and other projects.
  You can email me at ${data.email} with questions regarding this project.
  `;
}

module.exports = generateMarkdown;
