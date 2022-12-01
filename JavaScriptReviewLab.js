/*
1. How do we assign a value to a variable? A. With the assignment operator.
2. How do we change the value of a variable? By changing the value when calling it again.
3. How do we assign an existing variable to a new variable? Use the assignment operator("=") to assign the new variable to the existing one. Ex. const var 1 = var 2;
4. Remind me, what are declare, assign, and define? Assigning means assigning a value to a variable, declaring means calling a function or a statement to perform a code, and defining means giving it a meaning.
5. What is pseudocoding and why should you do it? It's bascially an informal language that helps programmers write programs. We should do it because it helps with the thought process of figuring out complex code.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? It depends on the code and how much knowledge that person has. Generally though I think it's 25/75. 
 1A*/

let firstVariable = "Hello World"; // B1-2
firstVariable = 10; // B3
let secondVariable = firstVariable; //B4
secondVariable = "Second String"; //B5
console.log(firstVariable); // The value of the first var is 10. B6
let yourName = "Mayank Kumar";
console.log("Hello my name is " + yourName); //B7


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a < b);
console.log(c>d);
console.log('Name' ==='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a < b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a != a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
// C Booleans

let animal = "cow";
if(animal == "cow"){
    console.log("MOOOOOOOOOOO")
}
else {
    console.log("You're not a cow!");
}
