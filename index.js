const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');

const questions = [
  {
    type: "input",
    message: "Project Name?",
    name: "title",
    default: 'Project',
  },
  {
    type: "input",
    message: "Project Description",
    name: "Description",
    default: 'project Description/Required'

  },
  {
    type: "input",
    message: "how many programming language use to bulid it",
    name: "Lang",
    default: 'Html'

  }, {
    type: 'input',
    massage: 'installation instructions',
    name: 'install',
    default: 'None'

  },
  {
    type: "input",
    message: "Program Usage?",
    name: "use",
    default: 'usage'

  }, {
    type: "input",
    message: "how can the user run this project?",
    name: "run",
    default: 'Running'

  }, {
    type: "input",
    message: "contributors names",
    name: "contribution",
    default: 'None'
  }, {
    type: "list",
    message: "choose license you would like to add?",
    name: "License",
    choices: ["MIT",
      "Apache 2.0",
      "GPL",
      "Boost Software 1.0",
      "BSD 2-clause",
      "BSD 3-clause ",],
      default:"MIT"
  },

  {
    type: "input",
    message: "Developer's name'?",
    name: "Author",
    default: 'NameesMohammed'

  }, {
    type: "input",
    message: "GitHub Profile URL",
    name: "AuthorG",
    default: 'https://github.com/namees-github'
  },
  {
    type: "input",
    message: "Developer Email Account?",
    name: "AuthorE",
    default: 'nameesmohammed12@gmail.com'

  }];

function genfun({ title, Description, Lang, install, use, run, contribution, License, Author, AuthorE, AuthorG }) {
  return `
  # Project Name
  ${title}
  # Project Description
        
  ${Description}
        
  # Table of Contents :

        
  *  [Project Title](#title)     
  *  [Project Description/Title](#Description)
  
  *  [Programming language used](#Lang)
  *  [Usage](#use)
  *  [Running Guid](#run)
  *  [Contributors names](#Contribution)
  *  [Author Name](#Author)
  *  [Author Email](#AuthorE)
  *  [Author GitHub Account](#AuthorG)
  * [License](#license)
  * [Questions](#Author)
        

  # User Stroy
      User Story
      1.   I a command-line application that accepts user input.
      2.   I want to be prompted for information about my application repository.
      3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
      4.   I want my project title to display as the title of the README.
      5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
      6.   I want to choose a license for my application from a list of options; and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.  
      7.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
      8.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
      9.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.
        
        

  # programming language To bulid ## ${title}  assignment?
        ${Lang}

  # Installation Guid 
      ${install}

  # Usage
        
      This application is used for this purposes ${use}
      Running # ${title} Project following these instructions: ${run}


  # Contributors
        ${contribution}
        
  # GitHub License
  [![License](https://img.shields.io/badge/License-${License}%202.0-blue.svg)](https://opensource.org/licenses/${License})]


        
        
  # Questions
        
        If you have any questions about the repo, open an issue or contact ${AuthorG} directly ${AuthorE}.
         [Contact information](https://github.com/${Author}/${title})
        
        
        `
}
function init() {
  inquirer.prompt(questions)
    .then((answers) => {

      console.log(answers)
      let filename = "readmeN.md"
      fs.writeFile("readmeN.md", genfun(answers), (error) => {
        if (error) {
          console.log('there is an ERROR')
        } else {
          console.log("your Read Me file created successfully!!")
        }

      })
    });
}
init()






