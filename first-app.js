console.log("Hello from Node.js");
// File System Module
const fs = require('fs');
fs.writeFileSync('hello.txt', "This is text content in new file.");

/*
    Node.js role in Web Development
    1. Run Server : Create Server and Listen to Incoming requests
    2. Business Logic : Handle Requests, Validate Input and Connect to DataBase
    3. Responses : (Render HTML, JSON etc)
*/

// Function in JS

var name = "Saurav Raj";
var age = 25;
var married = false;

console.log(getDetails(name, age, married));
function getDetails(name, age, married)
{
    return "My name is : " + name + " , My age is : " + age + " years old, and my maritial status is : " + (married ? "married": "unmarried.");
}

// use let and const to create variables

// Arrow functions
const getDetailsFromArrowFunction = (name, age, married) => {
    return "My name is : " + name + " , My age is : " + age + " years old, and my maritial status is : " + (married ? "married": "unmarried.");
}
console.log(getDetailsFromArrowFunction(name, age, married));

const add = (a,b) => a + b; // returns sum of two numbers

const addOne = a => a + 1; // One Parameter, we can skip paranthesis

const constFunction = () => "Hello World."; // Function with no arguments

// JS Objects
const person = {
    Name : "Saurav Raj",
    Age : 25,
    printDetails () {
        console.log("Hello, this is " + this.name);
    }
}
person.printDetails();

// Spread and Rest Operators
const copiedPerson = {...person};
let arr = ["Saurav", "Raj"];
let copiedArray = [...arr];
console.log(copiedPerson);
console.log(copiedArray);

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4,5));

// Object Destructing

const printName = (Name) => {
    console.log(Name);
}
printName(person);

const {Name, Age} = person;
console.log(Name, Age);

// Async Code and Promises

setInterval(() => {
    console.log("Repeat this at interval of 2 seconds.")
}, 2000);

setTimeout(() => {
    console.log("Print this once at after 2 seconds.")
}, 2000);