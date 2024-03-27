#! /usr/bin/env node

import inquirer from "inquirer";

let myPin = 1100;
let myBalance = 10000;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "please enter you pin",
    type: "number",
  },
]);
if (pinAns.pin === myPin) {
  console.log(`\nyour pin is correct`);
  console.log(`your current balance is ${myBalance}`);
  let optionAns = await inquirer.prompt([
    {
      name: "option",
      message: "choose one option",
      type: "list",
      choices: ["fast cash", "cash withdraw", "check balance"],
    },
  ]);
  if (optionAns.option === "fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fast",
        message: "please choose one option",
        type: "list",
        choices: ["1000", "3000", "5000", "10000", "12000"],
      },
    ]);
    if (fastCashAns.fast > myBalance) {
      console.log(`\nyour transaction cannot be proceed`);
      console.log(`you have insufficient balance`);
    } else if (fastCashAns.fast === "1000") {
      myBalance -= fastCashAns.fast;
      console.log(`\nyou have successfully withdrawn 1000 rupees.`);
      console.log(`your remaining balance is ${myBalance}`);
    } else if (fastCashAns.fast === "3000") {
      myBalance -= fastCashAns.fast;
      console.log(`\nyou have successfully withdrawn 3000 rupees.`);
      console.log(`your remaining balance is ${myBalance}`);
    } else if (fastCashAns.fast === "5000") {
      myBalance -= fastCashAns.fast;
      console.log(`\nyou have successfully withdrawn 5000 rupees.`);
      console.log(`your remaining balance is ${myBalance}`);
    } else if (fastCashAns.fast === "10000") {
      myBalance -= fastCashAns.fast;
      console.log(`\nyou have successfully withdrawn 10000 rupees.`);
      console.log(`your remaining balance is ${myBalance}`);

      // Adding extra option to show insufficient balance if my balance is less than 12000 otherwise its run normally like other option
    } else if (fastCashAns.fast === "12000") {
      myBalance -= fastCashAns.fast;
      console.log(`\nyou have successfully withdrawn 12000 rupees.`);
      console.log(`your remaining balance is ${myBalance}`);
    }
  } else if (optionAns.option === "cash withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "cashWithdraw",
        message: "please enter your amount",
        type: "number",
      },
    ]);
    // Adding option for showing insuficient balance if my balance is less than that amount you entered
    if (withdrawAns.cashWithdraw > myBalance) {
      console.log(`\nyour transaction cannot be proceed`);
      console.log(`you have insufficient balance`);
    } else if ((myBalance -= withdrawAns.cashWithdraw)) {
      let withdraw = withdrawAns.cashWithdraw;
      console.log(`\nyou have successfully withdrawn ${withdraw} rupees `);
      console.log(`your remaining balance is ${myBalance}`);
    }
  } else if (optionAns.option === "check balance") {
    console.log(`\nyour current balance is ${myBalance}`);
  }
} else 
console.log(`\nYou have entered an incorrect pin code \nplease enter correct pin code`);

