#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let greet = await inquirer.prompt([{
        name: "g",
        type: "input",
        message: chalk.cyan("Hello Dear user we offer three level of typing test \n Easy Hard and Diffcult its your choice what type of test you want to take\n and we give the particpate typing certificate if it win the round for start press enter")
    }]);
let s = await inquirer.prompt([{
        name: "st",
        type: "list",
        choices: ["sign up", "login"],
        message: chalk.yellow("if you have already account login or if you are new our page sign up please to start the test")
    }]);
if (s.st === "sign up") {
    let sign = await inquirer.prompt([{
            name: "up",
            type: "input",
            message: chalk.green("Enter your email address")
        }, {
            name: "p",
            type: "input",
            message: chalk.green("create your five digit password")
        }, {
            name: "n",
            type: "input",
            message: chalk.green("Enter your name")
        }
    ]);
    let condition = true;
    while (condition) {
        let e = await inquirer.prompt([{
                name: "s",
                type: "confirm",
                message: chalk.blue("Are you ready for test")
            }]);
        if (e.s === true) {
            let user = await inquirer.prompt([{
                    name: "mode",
                    message: chalk.yellow("select your mode please"),
                    type: "list",
                    choices: ["easy", "medium", "hard"]
                }, {
                    name: "start",
                    message: "start typing",
                    type: "confirm",
                }
            ]);
            if (user.start == true) {
                let time = 0; // Declare easy outside the interval function
                let t = setInterval(() => {
                    time++;
                }, 1000);
                if (user.mode === "easy") {
                    console.log(chalk.yellow("Type the given sentenece"));
                    console.log(chalk.green("quick brown fox jumps over the lazy dog"));
                    let ty = await inquirer.prompt([{
                            name: "type",
                            message: chalk.blue("Enter your sentence here"),
                            type: "input"
                        }, {
                            name: "stop",
                            message: chalk.yellow("Are you complete your sentence "),
                            type: "confirm"
                        }
                    ]);
                    let easy = "quick brown fox jumps over the lazy dog";
                    if (time <= 20 && easy === ty.type) {
                        console.log(chalk.yellow(`you win this mode`));
                        console.log(chalk.cyan(`             certifcate \n
                we verfiy that\n
         ${sign.n} succesfuly complete our easy level typing test in ${time} seconds\n
         Date : ${new Date()}
          `));
                    }
                    else {
                        console.log(chalk.red(`good try\n
               you take ${time} seconds for win you have to complete in 20 seconds`));
                        console.log(chalk.bgCyan("you can do anything belive in your self"));
                    }
                    if (ty.stop == true) {
                        clearInterval(t);
                    }
                }
                if (user.mode === "medium") {
                    console.log(chalk.yellow("Type the given sentenece"));
                    console.log(chalk.green("Quick Brown Fox Jumps Over The Lazy Dog"));
                    let typ = await inquirer.prompt([{
                            name: "ty",
                            message: chalk.blue("Enter your sentence here"),
                            type: "input"
                        }, {
                            name: "sto",
                            message: chalk.cyan("Are you complete your sentence "),
                            type: "confirm"
                        }
                    ]);
                    let es = "Quick Brown Fox Jumps Over The Lazy Dog";
                    if (time <= 18 && es === typ.ty) {
                        console.log(chalk.yellow("you win this mode "));
                        console.log(chalk.cyan(`              certifcate \n
                we verfiy that\n
         ${sign.n} succesfuly complete our medium level typing test in ${time} seconds\n
         ${new Date()}`));
                    }
                    else {
                        console.log(chalk.red(`good try\n
               you take ${time} seconds for win you have to complete in 18 seconds`));
                        console.log(chalk.bgBlue("practice makes perfect keep trying"));
                    }
                    if (typ.sto === true) {
                        clearInterval(t);
                    }
                }
                if (user.mode === "hard") {
                    console.log(chalk.blue("Type the given senteneces"));
                    console.log(chalk.green("quick brown fox jumps over the lazy dog"));
                    console.log(chalk.green("Quick Brown Fox Jumps Over The Lazy Dog"));
                    let type = await inquirer.prompt([{
                            name: "yt",
                            message: chalk.green("Enter your sentence here"),
                            type: "input"
                        }, {
                            name: "stay",
                            message: chalk.blue("Are you complete your sentence "),
                            type: "confirm"
                        }
                    ]);
                    let m = "Quick Brown Fox Jumps Over The Lazy Dog";
                    let e = "quick brown fox jumps over the lazy dog";
                    if (time <= 20 && m === type.yt && e === type.yt) {
                        console.log(chalk.yellow("you win this mode "));
                        console.log(chalk.cyan(`             certifcate\n
                we verfiy that\n
         ${sign.n} succesfuly complete our hard level typing test in ${time} seconds\n
    ${new Date()}`));
                    }
                    else {
                        console.log(chalk.red(`good try \n
            you take ${time} seconds for win you have to complete in 20 seconds`));
                        console.log(chalk.bgYellow("Every expert once a begnnier"));
                    }
                    if (type.stay == true) {
                        clearInterval(t);
                    }
                }
            }
        }
        let last = await inquirer.prompt([{
                name: "exit",
                type: "confirm",
                message: "you want to restart"
            }]);
        condition = last.exit;
    }
}
if (s.st === "login") {
    let email = "try234@gmail.com";
    let pass = 12390;
    let sign = await inquirer.prompt([{
            name: "in",
            type: "string",
            message: chalk.green("Enter your email address")
        }, {
            name: "password",
            type: "number",
            message: chalk.green("Enter your five digit password")
        }
    ]);
    if (sign.in === email && sign.password === pass) {
        let con = true;
        while (con) {
            let es = await inquirer.prompt([{
                    name: "o",
                    type: "confirm",
                    message: chalk.blue("Are you ready for test")
                }]);
            if (es.o === true) {
                let user1 = await inquirer.prompt([{
                        name: "mod",
                        message: chalk.yellow("select your mode please"),
                        type: "list",
                        choices: ["easy", "medium", "hard"]
                    }, {
                        name: "star",
                        message: "start typing",
                        type: "confirm",
                    }
                ]);
                if (user1.star == true) {
                    let times = 0; // Declare easy outside the interval function
                    let second = setInterval(() => {
                        times++;
                    }, 1000);
                    if (user1.mod === "easy") {
                        console.log(chalk.yellow("Type the given sentenece"));
                        console.log(chalk.green("quick brown fox jumps over the lazy dog"));
                        let ty = await inquirer.prompt([{
                                name: "type",
                                message: chalk.blue("Enter your sentence here"),
                                type: "input"
                            }, {
                                name: "stop",
                                message: chalk.yellow("Are you complete your sentence "),
                                type: "confirm"
                            }
                        ]);
                        let easy = "quick brown fox jumps over the lazy dog";
                        if (times <= 20 && easy === ty.type) {
                            console.log(chalk.yellow(`you win this mode`));
                            console.log(chalk.cyan(`             certifcate \n
                        we verfiy that\n
                 ${sign.n} succesfuly complete our easy level typing test in ${times} seconds\n
                 Date : ${new Date()}
                  `));
                        }
                        else {
                            console.log(chalk.red(`good try\n
                       you take ${times} seconds for win you have to complete in 20 seconds`));
                            console.log(chalk.bgCyan("you can do anything belive in your self"));
                        }
                        if (ty.stop == true) {
                            clearInterval(second);
                        }
                    }
                    if (user1.mode === "medium") {
                        console.log(chalk.yellow("Type the given sentenece"));
                        console.log(chalk.green("Quick Brown Fox Jumps Over The Lazy Dog"));
                        let typ = await inquirer.prompt([{
                                name: "ty",
                                message: chalk.blue("Enter your sentence here"),
                                type: "input"
                            }, {
                                name: "sto",
                                message: chalk.cyan("Are you complete your sentence "),
                                type: "confirm"
                            }
                        ]);
                        let es = "Quick Brown Fox Jumps Over The Lazy Dog";
                        if (times <= 18 && es === typ.ty) {
                            console.log(chalk.yellow("you win this mode "));
                            console.log(chalk.cyan(`              certifcate \n
                        we verfiy that\n
                 ${sign.n} succesfuly complete our medium level typing test in ${times} seconds\n
                 ${new Date()}`));
                        }
                        else {
                            console.log(chalk.red(`good try\n
                       you take ${times} seconds for win you have to complete in 18 seconds`));
                            console.log(chalk.bgBlue("practice makes perfect keep trying"));
                        }
                        if (typ.sto === true) {
                            clearInterval(second);
                        }
                    }
                    if (user1.mode === "hard") {
                        console.log(chalk.blue("Type the given senteneces"));
                        console.log(chalk.green("quick brown fox jumps over the lazy dog"));
                        console.log(chalk.green("Quick Brown Fox Jumps Over The Lazy Dog"));
                        let type = await inquirer.prompt([{
                                name: "yt",
                                message: chalk.green("Enter your sentence here"),
                                type: "input"
                            }, {
                                name: "stay",
                                message: chalk.blue("Are you complete your sentence "),
                                type: "confirm"
                            }
                        ]);
                        let m = "Quick Brown Fox Jumps Over The Lazy Dog";
                        let e = "quick brown fox jumps over the lazy dog";
                        if (times <= 20 && m === type.yt && e === type.yt) {
                            console.log(chalk.yellow("you win this mode "));
                            console.log(chalk.cyan(`             certifcate\n
                        we verfiy that\n
                 ${sign.n} succesfuly complete our hard level typing test in ${times} seconds\n
            ${new Date()}`));
                        }
                        else {
                            console.log(chalk.red(`good try \n
                    you take ${times} seconds for win you have to complete in 20 seconds`));
                            console.log(chalk.bgYellow("Every expert once a begnnier"));
                        }
                        if (type.stay == true) {
                            clearInterval(second);
                        }
                    }
                }
            }
            let last = await inquirer.prompt([{
                    name: "exit",
                    type: "confirm",
                    message: "you want to restart"
                }]);
            con = last.exit;
        }
    }
}
else {
    console.log(chalk.yellow("invalid user"));
}
