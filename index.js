// Inquirer prompt for selecting menu options

inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu-display',
      message: 'What would you like to do?',
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
        "Quit",
      ]
    },
    {
      type: 'input',
      name: '',
      message: '',
    },
    {
      type: 'input',
      name: '',
      message: '',
    }  
    {
      type: 'input',
      name: '',
      message: '',
    },
    {
      type: 'input',
      name: '',
      message: '',
    },
    {
      type: 'input',
      name: '',
      message: '',
    },
  ])
  .then((answers) => {
    
  })

  Init();