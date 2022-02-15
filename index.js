const inquirer=require('inquirer');
const fs=require('fs');

const questions=[
    {
        type: "input",
        message: "What is the title for your project?",
        name: "Title",
      },
      {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
      },
      {
        type: "input",
        message: "What necessary dependencies must be installed to run this app?",
        name: "Dep",
      },{
        type: "input",
        message: "What is this app used for?",
        name: "use",
      },{
        type: "input",
        message: "Developer this project Name?",
        name: "Author",
      },{
        type: "input",
        message: "Developer GitHub Account?",
        name: "AuthorG",
      },
      {
        type: "input",
        message: "Developer Email Account?",
        name: "AuthorE",
      }];



function genfun({Title,Description,Dep,use,Author,AuthorE,AuthorG}){
    return `    # project Name
    ${Title} 
    # Description

${Description}
`
    
}





function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        const generate=genfun(response);

        fs.writeFile('readmeN.md', generate,
         (err) =>err ? console.log(err) : console.log('Successfully created'))})
  
   } init();