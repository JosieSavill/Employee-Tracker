const inquirer = require('inquirer');
const mysql = require("mysql2");
const cTable = require("console.table")
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tracker_db"
})


function init(){


    inquirer.prompt([{
      type: "list",
      choices: ["view all departments","view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "finished"],
      message: "What do you want to do?",
      name: "selected"

    }]).then( (answers) => {
      console.log(answers.selected);
      switch (answers.selected){
        case "view all departments": getDepartments(); break;
        case "view all roles": getRoles(); break;
        case "view all employees": getEmployees(); break;
        case "add a department": addDepartments(); break;
        case "add a role": addRole(); break;
        case "add an employee": addEmployee(); break;
        case "update an employee role": updateEmployee(); break;
        case "finished": break;

      }


    })
    

}

init();

function getDepartments(){
    connection.query("SELECT * FROM department", function(err, results){

      const output = cTable.getTable(results);
      console.log(output);
      init();
    })
    


}
function addDepartments(){
  inquirer.prompt([{
    type: "input",
    message: "What department do you want to add?",
    name: "department"

  }]).then( (answers) => {
    console.log(answers.department);
    connection.query(`INSERT INTO department (dept_name)
    VALUES ("${answers.department}");`, function(err, results){

 
      console.log("Department Added!");
      init();
    })


  });



}



function getRoles(){
  connection.query("SELECT * FROM role", function(err, results){

    const output = cTable.getTable(results);
    console.log(output);
    init();
  })



}
function addRole(){
  inquirer.prompt([{
    type: "input",
    message: "What is your role?",
    name: "role"

  },{
    type: "input",
    message: "What is your salary?",
    name: "salary"

  },{
    type: "input",
    message: "What is your department id?",
    name: "dept_id"

  }]).then( (answers) => {

    connection.query(`INSERT INTO role (id, title, salary, department_id)
    VALUES (NULL, '${answers.role}' , ${answers.salary} , ${answers.dept_id}  );`, function(err, results){

 
      console.log("Role Added!");
      init();
    })


  });
}

function getEmployees(){
  connection.query("SELECT * FROM employee", function(err, results){

    const output = cTable.getTable(results);
    console.log(output);
  })

  init();


}

function addEmployee(){

  inquirer.prompt([{
    type: "input",
    message: "What is your first name?",
    name: "fn"

  },{
    type: "input",
    message: "What is your last name?",
    name: "ln"

  },{
    type: "input",
    message: "What is your role id?",
    name: "role_id"

  },{
    type: "input",
    message: "What is your manager id?",
    name: "mgr_id"

  }]).then( (answers) => {

    let q = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (NULL, '${answers.fn}' , '${answers.ln}' , ${answers.role_id}, ${answers.mgr_id});`
    connection.query(q, function(err, results){

      console.log(q)

        console.log(err)
      console.log("Employee Added!");
      init();
    })


  });

}


function updateEmployee(){

  inquirer.prompt([{
    type: "input",
    message: "What is the Employee id?",
    name: "id"

  },{
    type: "input",
    message: "What is your role id?",
    name: "role_id"

  }

  ]).then( (answers) => {

    let q = `UPDATE employee SET  role_id=${answers.role_id} WHERE id=${answers.id};`
    connection.query(q, function(err, results){

   

      console.log("Employee  Updated!");
      init();
    })


  });

}

 


 

