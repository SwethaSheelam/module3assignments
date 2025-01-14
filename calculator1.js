const crypto = require("crypto");
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No operation provided.");
    process.exit(1);
}
const operation = args[0];
const numbers = args.slice(1).map(Number);
function generateRandomNumber(length) {
    if (!length) {
        console.log("Provide length for random number generation.");
        return;
    }
    const randomBytes = crypto.randomBytes(Number(length));
    console.log(randomBytes.toString("binary"));
}
switch (operation) {
    case "add":
        if (numbers.length < 2) {
            console.log("Please provide at least two numbers for addition.");
        } else {
            const result = numbers.reduce((sum, num) => sum + num, 0);
            console.log(`Result: ${result}`);
        }
        break;

    case "sub":
        if (numbers.length < 2) {
            console.log("Please provide at least two numbers for subtraction.");
        } else {
            const result = numbers.reduce((diff, num) => diff - num);
            console.log(`Result: ${result}`);
        }
        break;

    case "mult":
        if (numbers.length < 2) {
            console.log("Please provide at least two numbers for multiplication.");
        } else {
            const result = numbers.reduce((prod, num) => prod * num, 1);
            console.log(`Result: ${result}`);
        }
        break;

    case "divide":
        if (numbers.length < 2) {
            console.log("Please provide at least two numbers for division.");
        } else {
            const result = numbers.reduce((quot, num) => quot / num);
            console.log(`Result: ${result}`);
        }
        break;

    case "sin":
        if (numbers.length !== 1) {
            console.log("Please provide one number for sine calculation.");
        } else {
            const result = Math.sin(numbers[0]);
            console.log(`Result: ${result}`);
        }
        break;

    case "cos":
        if (numbers.length !== 1) {
            console.log("Please provide one number for cosine calculation.");
        } else {
            const result = Math.cos(numbers[0]);
            console.log(`Result: ${result}`);
        }
        break;

    case "tan":
        if (numbers.length !== 1) {
            console.log("Please provide one number for tangent calculation.");
        } else {
            const result = Math.tan(numbers[0]);
            console.log(`Result: ${result}`);
        }
        break;

    case "random":
        if (numbers.length > 1) {
            console.log("Only one argument is needed for random number generation.");
        } else {
            generateRandomNumber(numbers[0]);
        }
        break;

    default:
        console.log("Invalid operation");
}
