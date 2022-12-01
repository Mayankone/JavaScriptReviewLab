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
// D The Farm

let Age = 14;
if(Age >= 16){
    console.log("Here are the keys!");
}
else {
    console.log("Sorry, you're too young.");
}
// 1E

for(let i = 0; i<=10; i++){
    console.log(i);
}
// 2A1

for(let i=10; i<=400; i++){
    console.log(i);
}
//2A2

for(let i=12; i<=4000; i*=3){
    console.log(i);
}

for(let i=1; i<=100; i++){
    if(i % 2 == 0){
        console.log(i + " is an even number");
    }
    else{
        console.log(i);
    }
}
//2B

for(let i=0; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("I found a " + i + ". High five! Also three is a crowd");
    }
    else if(i % 5 == 0){
        console.log("I found a " + i + ". High five!");
    }
    else if(i % 3 == 0){
        console.log("I found a " + i + ". Three is a crowd");
    }
    else{
        console.log(i);
    }
}
//2C - GIve me five

let bank_account = 1+2+3+4+5+6+7+8+9+10;
console.log(bank_account); //55
for(i=1; i<=100; i++){
    bank_account += i;
}
bank_account *= 2;
console.log(bank_account);
//2D - savings account

/* 3A
1. What are the things in an array called? Elements
2. Do Arrays guarantee those things will be in order? No. There isn't any guarantee since the code could be delcared a certain way or other functions could be used to knock it out of order.
3. What real-life thing could you model with an array? Lists. */

const quotes = ["A", "B", "C"];
//3B

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); // Access the first element
randomThings[2] = "World"; // Change the value of hello to world
console.log(randomThings); // Check the value to make sure it's updated
// 3C

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]); // Access the 3rd element of the array
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);
//3D

const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
myArray.push("MyString");
const index = myArray.indexOf(5);
if (index > -1) { 
  myArray.splice(index, 1); 
}
myArray.unshift("Bob Marley") // Add Bob Marley to beginning of array
const index1 = myArray.indexOf("MyString");
if (index1 > -1) { 
  myArray.splice(index1, 1); 
}
myArray.reverse();
console.log(myArray);
// Mutate means that the objects can be moved or reassigned in an array. And yes it was mutated and reversed.

let Num = 104;
if(Num<100){
    console.log("Little number");
}
else {
    console.log("Big number");
}
//3F

let num = 23;
if(num < 5){
    console.log("Little number");
}
else if(num > 10){
    console.log("Big number");
}
else {
    console.log("monkey");
}
//3G

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

kristynsCloset.splice(6, 0, "raybans"); // Add raybans after yellow knit hat
kristynsCloset[5] = "stained knit hat"; // Changed yellow knit hat to stained
console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][1] + ", and some " + thomsCloset[2][0]);
thomsCloset[1][2] = "Footie Pajamas";
//3H


const printGreeting = (name) => {
    console.log("Hello " + name);
}
printGreeting("SLimer")
//4A

const printCool = (name) => {
    console.log(name + " is cool.");
}
printCool("Capatain Reynolds");