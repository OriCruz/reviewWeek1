////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers
//console.log(Math.max(234,450));
/* 2. Write an if/else statement for the following requirements:
If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */
/*let grade =50;

if(grade>=90){
  console.log("A");
}
else if(grade>=80){
  console.log("B");
}
else if(grade>=70){
  console.log("C");
}
else if(grade>=55){
  console.log("D");
} 
else{
console.log("F");
}*/

//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"
/*let time =1200;

if(time<=1159){
  console.log("Good Morning");
}
else if(time>=1200){
  console.log("Good Afternoon");
}
else{
  console.log("Hey There")
}*/

////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////
// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
/*let n = 'Sabrina';
let letter= n.charAt(4)
console.log(letter);*/
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//Unicode provides an unique string  number for every character, no matter what platform, device, application or language.
/*let n = "Teddy";
console.log(n.charAt(2));
console.log(n.charCodeAt(2));
*/
// Using fromCharCode() - make it readable for us :). You'll see!
//console.log(String.fromCharCode(100));
// Take your first and last name and concat()
//console.log("Oriana "+"Cruz");
// Create a string and make it return true using startsWith()
/*let str ="Hello there!";
console.log(str.startsWith("Hello")); 
*/
// Now use any variable with endsWith() and return false
/*let str ="Hello there!";
console.log(str.endsWith("Hello")); 
*/
// Finish the following sentence. Use includes() and return true.
/*const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
const result=ozgur.includes('stars');
console.log(result);*/

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
/*const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const result= joshHadALittleLambOopsCow.indexOf('cow');
console.log(result);*/


////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.
/*
const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a< b);
console.log(c > b);
console.log(d === d);
console.log(d !== a);
console.log(a <15);
console.log(a < b && b < c);
console.log(c > b && b > a && a != d);
*/

////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
/*
for (let i = 0; i <10; i++) {
  console.log('I;m going to throw up!');
}
*/
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
/*
for (let i = 0; i <20; i++) {
  console.log('oh god.... I will throw up too!');
}
*/
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
/*
let spins =0; 
while (spins<=20) {
console.log("I'm sorry");
spins++;  
}
*/
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
/*
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  }
  for (const property in whateverQueenBeySaid){
    console.log( `${property}: ${whateverQueenBeySaid[property]}`);
  }
  */
  // Using (FOR IN LOOP), print the indexes of the array.
  /*
  const lana = ['l', 'a', 'n', 'a']
  for (const property in lana){
    console.log( `${property}: ${lana[property]}`);
  }*/
  
  // USE (FOR OF LOOP)!
  /*
  const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  for(const i of tia){
    console.log(i);
  }*/
  
  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  /*const perscholas = ['Amira', 'Arely', 'Jonathan']
  perscholas.forEach(element => {
    let str="PS ";
    console.log(str+element);
  });
  */

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push()= add one or more elements to the end of the array
// pop()= removes the last element from an array
// unshift()= add one or more elements to the beginning of an array
// shift()= removes the first element from an array
// concat()=  used to merge two or more arrays returning a new array
// splice()= removes or replace existing elements and/or add new elements in a specific place
// slice()= returns a shallow copy of a portion of an array into a new array
// sort()=  sorts the elements of an array in place and returns the reference to the same array
// includes()= determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// indexOf()=  returns the first index at which a given element can be found in the array, or -1 if it is not present.
// length= calculates the length of the array
/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
/*
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];
shoppingList.push("bottle of Hendricks gin");
console.log(shoppingList);
*/
//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/
/*
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
console.log(yoda.reverse());
*/
//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

/*var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
let waitLength= waitList.length;
console.log(`waitList is${waitList}`);
for (let i = 0; i < waitLength; i++) {
  
  let nowServing= waitList.shift();
  console.log(`now serving ${nowServing}`);

}
console.log(`waitList is${waitList}`);
*/

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.
/*
var shoe = ["just", "do", "it"];
let shoeString = shoe.toString();
console.log(shoeString);
*/
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
// let num=[1,2,3,4,5];
// let x=[...num];
// console.log(x);
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// let num=[1,2,3,4,5];
// let other=[ 'a', 'b','c','d','f'];
// let all=[...num, ...other];
// console.log(all);

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(a,b){
  let ans = " ";
  if(a>b){
    ans=console.log('A is bigger than B');
  }
  else{
   ans= console.log('B is bigger than A');
  }
  return ans;
}
maxOfTwoNumbers(1,2);

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

