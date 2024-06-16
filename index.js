// What is JavaScript
//  Js is programming language. We use it to give instruction to the computer. JavaScript is a dynamically typed language.

// Setting up VS Code?
// It is free and popular code editor by Microsoft

// Our 1st JS code
// console.log is used to log (print a message the console)
            // console.log("Hello Sonu");

// Variables in js
// Variable are container for data.

// Variable Rules 
// 1. Variable name should be unique.
// 2. Variable name should not start with a number.
// 3. Variable names are case senstive; "a" & "A" id different.
// 4. Onle letters, digits, underscore(_) and $ is allowed. (not even space)
// 5. Only a letter, underscore(_) or $ should be 1st character.
// 4. Variable name should not be a keyword.
// 5. Variable name should be descriptive.
// Example
// Fullname = "Sonu Yadav"
// console.log(Fullname);
// fullName = "Sonu Yadav"
// console.log(fullName);
// FULLNAME = "Sonu Yadav"
// console.log(FULLNAME);
// fullname = "Sonu Yadav"
// console.log(fullname);
// _fullname = "Sonu Yadav"
// console.log(_fullname);
// fullname = "Sonu Yadav"
// console.log($fullname);
// fullname123 = "Sonu Yadav"
// console.log($fullname123);

// let, const & var
// var:- Variable can be re-declared & update. A globle scope variable.
// let:- Variable can be updated but not re-declared. A block scope variable.
// const:- Variable can neither be updated nor re-declared. A block scope variable.
// Example
// Var
// var a = 10
// console.log(a)
// a = 20
// console.log(a)

// Let
// let name = "Sonu"
// console.log(name);
// name = "Yadav"
// console.log(name);

// Const
// const PI = 3.14
// console.log(PI)
// PI = 3.15
// console.log(PI)
// \end{code}

// what is datatype
// In JavaScript, a data type is a classification of data that determines the type of value a variable
// can hold and the operations that can be performed on that value.
// Two type of Datatype
// 1. Primitive Datatype
    // 1.1 String
    // 1.2 Number
    // 1.3 Boolean
    // 1.4 Null
    // 1.5 Undefined
    // 1.6 Symbol
    // 1.7 BigInt

    // 2. Reference Datatype
    // 2.1 Object
    // 2.2 Array
    // 2.3 Function

// Example
// Primitive Datatype

// let name = "Sonu"
// console.log(typeof name)

// let age = 25
// console.log(typeof age)

// let isAdmin = true
// console.log(typeof isAdmin)

// let Null = null
// console.log(typeof Null)

// let Undefined
// console.log(typeof Undefined)

// let Symbol = Symbol("id")
// console.log(typeof Symbol)

// let BigInt = 12345678901234567890n
// console.log(typeof BigInt)

// Reference Datatype
// let person = {
    // name: "Sonu",
    // age: 25
// }
// console.log(typeof person)

// let arr = [1,2,3,4,5]
// console.log(typeof arr)

// let fun = function(){
    // console.log("I am a function")
// }
// console.log(typeof fun)


// what is conditional statement in javaScript
// Conditional statements are used to perform different actions based on different conditions.
// In JavaScript, we have the following conditional statements:
// 1. what is if statement
    // The if statement is used to specify a block of code to be executed, if a specified condition is true.
    // Syntax
    // if (condition) {
    //     // code block to be executed if the condition is true
    // }
    // Example
    // let age = 25
    // if (age > 18) {
    //     console.log("You are an adult")
    // }

// 2. what is else if statement
    // The else if statement is used to specify a new condition to test, if the first condition is false.
    // Syntax
    // if (condition1) {
    //     // code block to be executed if condition1 is true
    // } else if (condition2) {
    //     // code block to be executed if the condition1 is false and condition2 is true
// }
    // Example
    // let age = 25
    // if (age > 18) {
    //     console.log("You are an adult")
    // } else if (age == 18) {
    //     console.log("You are a teenager")
// }

// 3. what is else statement
    // The else statement is used to specify a block of code to be executed, if all the conditions above are false.
    // Syntax
    // if (condition1) {
    //     // code block to be executed if condition1 is true
    // } else if (condition2) {
    //     // code block to be executed if the condition1 is false and condition2 is true
// }
// Example
    // let age = 25
    // if (age > 18) {
    //     console.log("You are an adult")
    // } else if (age == 18) {
    //     console.log("You are a teenager")
    // } else {
        // console.log("You are a kid")
    // }

// what is loop
    // Loops are used to execute a block of code as long as a specified condition is true.
    // In JavaScript, we have the following loops:
    // 1. what is for loop
        // The for loop is used to execute a block of code a specified number of times.
        // Syntax
        // for (statement 1; statement 2; statement 3) {
            // code block to be executed
        // }
        // Example
        // for (let i = 0; i < 10; i++) {
            // console.log(i)
        // }

        // for (let i = 10; i > 0; i--) {
            // console.log(i)
        // }
    
    // what is while loop
    // The while loop is used to execute a block of code as long as a specified condition is true.
    // Syntax
    // while (condition) {
        // code block to be executed
    // }
    // Example
    // let i = 0
    // while (i < 10) {
        // console.log(i)
        // i++
    // }
    
    // what is do while loop
    // The do...while loop is used to execute a block of code once, and then test the condition.
    // Syntax
    // do {
        // code block to be executed
    // }
    // while (condition);
    // Example
    // let i = 0
    // do {
        // console.log(i)
        // i++
    // }
    // while (i < 10)
        
    // what is switch statement
    // The switch statement is used to perform different actions based on different conditions.
    // Syntax
    // switch (n) {
        // case label1:
            // code block
        // break;
        // case label2:
            // code block
        // break;
        // case label3:
            // code block
        // break;
        // default:
            // code block
    // }
    // Example
    // let age = 25
    // switch (age) {
        // case 18:
            // console.log("You are a teenager")
        // break;
        // case 25:
            // console.log("You are an adult")
        // break;
        // default:
            // console.log("You are a kid")
    // }
    
    // what is break statement
    // The break statement is used to break out of a loop.
    // Syntax
    // break;
    // Example
    // for (let i = 0; i < 10; i++) {
        // console.log(i)
        // if (i == 5) {
            // break
        // }
    // }
    
    // what is continue statement
    // The continue statement is used to stop the current iteration of the loop, and continue with the next iteration.
    // Syntax
    // continue;
    // Example
    // for (let i = 0; i < 10; i++) {
        // if (i == 5) {
            // continue
        // }
        // console.log(i)
    // }
    
    // what is function
    // A function is a block of code designed to perform a particular task.
    // In JavaScript, we have the following functions:
    // 1. what is function declaration
        // A function declaration is a function that is declared with the function keyword.
        // Syntax
        // function functionName() {
            // code to be executed
        // }
        // Example
        // function greet() {
            // console.log("Hello")
        // }
        // greet()
    
    // 2. what is function expression
        // A function expression is a function that is stored in a variable.
        // Syntax
        // let functionName = function() {
            // code to be executed
        // }
        // Example
        // let greet = function() {
            // console.log("Hello")
        // }
        // greet()
    
    // 3. what is arrow function
        // An arrow function expression is a compact alternative to a traditional function expression.
        // Syntax
        // let functionName = () => {
            // code to be executed
        // }
        // Example
        // let greet = () => {
            // console.log("Hello")
        // }
        // greet()
        
        // let greet = (name) => {
            // console.log("Hello " + name)
        // }
        // greet("Sonu")
        
        // let greet = (name, age) => {
            // console.log("Hello " + name + " " + age)
        // }
        // greet("Sonu", 25)
        
        // let greet = (name, age) => {
            // return "Hello " + name + " " + age
        // }
        // console.log(greet("Sonu", 25))
        
        // let greet = (name, age) => "Hello " + name + " " + age
        // console.log(greet("Sonu", 25))
        
        // let greet = name => "Hello " + name
        // console.log(greet("Sonu"))
        
        // let greet = () => "Hello"
        // console.log(greet())
    
    // what is function statement
    // A function statement is a function that is declared with the function keyword.
    // Syntax
    // function functionName() {
        // code to be executed
    // }
    // Example
    // function greet() {
        // console.log("Hello")
    // }
    // greet()
    
    // what is function return
    // The return statement is used to exit a function.
    // Syntax
    // return;
    // Example
    // function greet() {
        // console.log("Hello")
        // return
    // }
    // greet()
    
    // what is function parameter
    // A function parameter is a variable listed inside the parentheses in the function definition.
    // Syntax
    // function functionName(parameter1, parameter2) {
        // code to be executed
    // }
    // Example
    // function greet(name) {
        // console.log("Hello " + name)
    // }
    // greet("Sonu")

// what is string
    // A string is a sequence of characters.
    // In JavaScript, we have the following string methods:
    // 1. what is charAt()
        // The charAt() method returns the character at the specified index (position) in a string.
        // Syntax
        // str.charAt(index)
        // Example
        // let str = "Hello"
        // console.log(str.charAt(0))
        // console.log(str.charAt(1))
        // console.log(str.charAt(2))
        // console.log(str.charAt(3))
        // console.log(str.charAt(4))
    // string method in javaScript
    // 2. what is charCodeAt()
        // The charCodeAt() method returns the Unicode of the character at the specified index (position) in a string.
        // Syntax
        // str.charCodeAt(index)
        // Example
        // let str = "Hello"
        // console.log(str.charCodeAt(0))
        // console.log(str.charCodeAt(1))
        // console.log(str.charCodeAt(2))
        // console.log(str.charCodeAt(3))
        // console.log(str.charCodeAt(4))
    // 3. what is concat()
        // The concat() method is used to merge two or more strings.
        // Syntax
        // str.concat(string2, string3, ..., stringN)
        // Example
        // let str1 = "Hello"
        // let str2 = "World"
        // console.log(str1.concat(str2))
        // console.log(str1.concat(" ", str2))
        // console.log(str1.concat(" ", str2, "!"))
    // 4. what is fromCharCode()
    // The fromCharCode() method returns a string created from the specified sequence of Unicode values.
    // Syntax
    // String.fromCharCode(unicode)
    // Example
    // console.log(String.fromCharCode(72, 101, 108, 108, 111))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).length)
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).toUpperCase())
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).toLowerCase())
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charAt(0))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charAt(1))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charAt(2))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charAt(3))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charAt(4))
    // console.log(String.fromCharCode(72, 101, 108, 108, 111).charCodeAt(0))
    