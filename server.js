const inquirer = require('inquirer');



function init(){


    inquirer.prompt([{
      type: "list",
      choices: ["view all departments","view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "finished"],
      message: "What do you want to do?",
      name: "selected"

    }]).then( (answers) => {
      console.log(answers.selected);
      switch (answers.selected){
        case "view all departments": break;
        case "view all roles": break;
        case "add a department": break;
        case "adda role": break;
        case "add an employee": break;
        case "update an employee": break;
        case "finished": break;

      }


    })
    

}

init();
 

