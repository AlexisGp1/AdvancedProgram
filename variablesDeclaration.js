//Global Scope
var myVar = 100; 
let myLet = 15;
const myConst = 3.1416;

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, varHoisted: ${hoistedVariable}`);
//Hoisting

//Var Hoisted
var hoistedVariable = 25; 

//Local Scope

if (typeof myVar !== "undefined") { //Execution Context
    console.log(myVar);
    var myVar = 50;
    console.log(myVar);
};