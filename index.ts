#! /usr/bin/env node

import inquirer from "inquirer";

// Step 1: Computer will generate a random number.
// Step 2: User input for guessing number.
// Step 3: Compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You gussed the right number.");
}else{
    console.log("You gussed the wrong number.");
}
