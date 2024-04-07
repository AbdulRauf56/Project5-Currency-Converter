#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n\t Welcome to `Abdul Rauf's` Currency - Converter \n"));

// Define the list of currencies and there exchange rates.
let exchange_rate: any = {
    "USD": 1,
    "Afghan": 71.23,
    "Austrailian Dollar": 1.52,
    "Bangladeshi Taka": 109.60,
    "Canadian Dollar": 1.32,
    "Euro": 0.92,
    "Indian Rupee": 83.30,
    "Iranian Rial": 42775.00,
    "Iraqi Dinar": 1308.17,
    "Israeli Shekel": 3.76,
    "Kuwaiti Dinar": 0.31,
    "Mexican Peso": 16.46,
    "Namibian Dollar": 18.67,
    "Netharlands AG": 1.80,
    "Newzeland Dollar": 1.66,
    "Omani Rial": 0.38,
    "Pakistani Rupee": 277.54,
    "Qatari Riyal": 3.64,
    "Russian Ruble": 92.58,
    "Saudi Riyal": 3.75,
    "Singapore Dollar": 1.35,
    "South African Rand": 18.69,
    "Turkish Lira": 32.03,
    "UAE Dirham": 3.67,
}

// Prompt the user to select currencies to convert from and to.
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.bgMagentaBright.bold("Select the currency to convert from:"),
        choices: ["USD", "Afghan", "Austrailian Dollar", "Bangladeshi Taka", "Canadian Dollar", "Euro", "Indian Rupee", "Iranian Rial", "Iraqi Dinar", "Israeli Shekel", "Kuwaiti Dinar", "Mexican Peso", "Namibian Dollar", "Netharlands AG", "Newzeland Dollar", "Omani Rial", "Pakistani Rupee", "Qatari Riyal", "Russian Ruble", "Saudi Riyal", "Singapore Dollar", "South African Rand", "Turkish Lira", "UAE Dirham"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magenta.bold("Select the currency to convert into:"),
        choices: ["USD", "Afghan", "Austrailian Dollar", "Bangladeshi Taka", "Canadian Dollar", "Euro", "Indian Rupee", "Iranian Rial", "Iraqi Dinar", "Israeli Shekel", "Kuwaiti Dinar", "Mexican Peso", "Namibian Dollar", "Netharlands AG", "Newzeland Dollar", "Omani Rial", "Pakistani Rupee", "Qatari Riyal", "Russian Ruble", "Saudi Riyal", "Singapore Dollar", "South African Rand", "Turkish Lira", "UAE Dirham"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.cyanBright.bold("Enter the amount to convert:")
    }
]);

// Perform currency conversion by using formula.
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount =  exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

// Formula of conversion.
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount.
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);