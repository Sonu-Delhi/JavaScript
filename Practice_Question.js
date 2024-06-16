// Q-1. Get use rto print a number using prompt("enter a number"). check if the number is a multiple of 5 or not.

// var num = prompt("enter a number");
// if (num % 5 == 0) {
//     console.log(num + " is a multiple of 5");
// }
// else {
//     console.log(num + " is not a multiple of 5");
// }

// Q-2. Write a code which can give grades to students according to their score.
// Score range:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
var score = prompt("Enter your score");
if (score >= 90 && score <= 100) {
    console.log("Your grade is A");
}
else if (score >= 80 && score <= 89) {
    console.log("Your grade is B");
}
else if (score >= 70 && score <= 79) {
    console.log("Your grade is C");
}
else if (score >= 60 && score <= 69) {
    console.log("Your grade is D");
}
else {
    console.log("Your grade is F");
}