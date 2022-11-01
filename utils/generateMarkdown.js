// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
  } else {return ""}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="GPL"){
    return "[![GPL](https://img.shields.io/eclipse-marketplace/l/GPL)](https://opensource.org/licenses/gpl-2.0.php)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="APACHE 2.0"){
    
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
