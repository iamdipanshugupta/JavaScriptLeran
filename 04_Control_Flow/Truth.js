const userEmail = [];

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     "dont have a user email"
// }

// falsy values
// false
// 0
// -0
// ""
// null
// undefined
// BigInt 0n
// NaN

// truthy values
// true
// 1
// "0"
// "false"
// {}
// []
// BigInt 1n
// " "
// function(){}
// false == 0 // true
// false == "" // true
// false == '' // true
// 0 == '' // true
// if(userEmail.length === 0){
//     console.log("Arrray Is empty");
// }

// const objkey = {}

// if(Object.keys(objkey).length === 0){
//     console.log("Object is empty");
// }

// Nulish Coalescing operator (??): null or undefined

let val1;
//val1 = 50 ?? 10; // 50
//val1 = null ?? 10; // 10
//val1 = undefined ?? 10; // 10
//val1 = "" ?? 10; // ""
// val1 = null ?? 10 ?? 20 //10
// console.log(val1);


// Ternary Operator
 //condition ? true : false
 const iceTeaPrice = 50;
iceTeaPrice >=80 ? console.log("I will buy IceTea") : console.log("I will not buy IceTea");

const isRaining = false;
console.log(isRaining ? "Take a rain coat" : "No need to take a rain coat");
