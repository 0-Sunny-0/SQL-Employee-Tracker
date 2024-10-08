// Necessary/Global Variables
const inquirer = require('inquirer');
// Import library js files
const department = require('./lib/department');
const employee = require('./lib/employee');
const role = require('./lib/role');

// Inquirer prompt for selecting menu options
// wrap this all in a function and then call it via recursion after your code is ran
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu_display',
      message: 'What would you like to do?',
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
        "Exit Menu",
      ]
    },
  ])
  .then((answers) => {
    const res = answers.menu_display;
    // if(res === "Add a department") {
    //   addDepartment();
    // } else if ()
    switch (res){
      case "Add a department":
        // node fetch to the path (department, role, employee)
        //logic of addDepartment()
        // recursion?
        break;
      case "View all departments":
        //logic of viewDepartments()
        break;
      default: 
      //else statement
        break;
    }
  })

  // Case needs to be made for each menu selection in above function
  // Res needs to be changed on line 33 to answers. 
  // instead of console.log do console.table so it returns the actual table of data

    // additional inputs are not needed, as the inquirer prompt will be in a function and call itself. 
    // {
    //   type: 'input',
    //   name: '',
    //   message: '',
    // },
    // {
    //   type: 'input',
    //   name: '',
    //   message: '',
    // }  
    // {
    //   type: 'input',
    //   name: '',
    //   message: '',
    // },
    // {
    //   type: 'input',
    //   name: '',
    //   message: '',
    // },
    // {
    //   type: 'input',
    //   name: '',
    //   message: '',
    // },
  
// Come back to this
  // init();