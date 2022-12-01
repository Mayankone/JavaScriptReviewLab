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
console.log("Hello my name is " + yourName);
