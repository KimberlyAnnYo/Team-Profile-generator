// link to page creation
const generateHTML = require('./src/generateHTML');

//team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

// node modules
const fs = require('fs');
const inquirer = require ('inquirer');

// team array
const teamArray = [];

// start of manager prompts
const addmanager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'who is the manager',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter the managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message:'enter the managers ID.',
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log('please enter rhe managers id')
                    return false;
                } else {
                    return true;
                }
            }
        },
        
    ])
}