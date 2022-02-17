const inquirer=require('inquirer');
const fs=require('fs');

const questions=[
    {
        type: "input",
        message: "Project Name?",
        name: "Title",
        default:'Project',
      },
      {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
        default:'project Description/Required'

      },
      {
        type: "input",
        message: "how many programming language use to bulid it",
        name: "Lang",
        default:'Html'

      },{
        type: "input",
        message: "What is this app used for?",
        name: "use",
        default:'usage'

      },{
        type: "input",
        message: "how can the user run this project?",
        name: "run",
        default:'Running'

      },
      {
        type: "input",
        message: "Developer this project Name?",
        name: "Author",
        default:'NameesMohammed'

      },{
        type: "input",
        message: "Developer GitHub Account?",
        name: "AuthorG",
        default:'nameesgithub'

      },
      {
        type: "input",
        message: "Developer Email Account?",
        name: "AuthorE",
        default:'nameesmohammed12@gmail.com'

      }];
      
      function genfun({Title,Description,Lang,use,run,Author,AuthorE,AuthorG}){
        return `
        # Project Name

         ${Title}

        # Description
        
        ${Description}
        
        # Table of Contents 
        
        *  Project Description/Title
        
        *  [Usage](#usage)
        
        * [License](#license)
        
        * [Questions](#questions)
        
        # Installation
        
        The following necessary dependencies must be installed to run the application properly: ${Lang}
        
        # Usage
        
        ​This application is used for ${use}
        the User can run it by this steps: ${run}
        
        
        
        # Questions
        
        If you have any questions about the repo, open an issue or contact ${AuthorG} directly ${AuthorE}.
         [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${Author}/${Title})
        
        
        `
      }
      function init(){
        inquirer.prompt(questions)
  .then((answers) => {
    
console.log(answers)
    let filename="readmeN.md"
    fs.writeFile("readmeN.md",genfun(answers),(error)=>{
      if(error){
        console.log('there is an ERROR')
      }else{
console.log("your Read Me file created successfully!!")
      }
      
    })
  });}
      init()



function genfun({Title,Description,Dep,use,Author,AuthorE,AuthorG}){
    return ` 
    # ${Title}

# Description

${Description}

# Table of Contents 

*  Project Description/Title

*  [Usage](#usage)

* [License](#license)

* [Questions](#questions)

# Installation

The following necessary dependencies must be installed to run the application properly: ${Dep}

# Usage

​This application is used for ${use}



# Questions

If you have any questions about the repo, open an issue or contact ${AuthorG} directly ${AuthorE}.
 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${Author}/${Title})


`
    
}


