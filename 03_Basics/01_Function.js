function sayMyName(){
    console.log("D")
    console.log("I")
    console.log("P")
    console.log("U")
}
// sayMyName();

// function addTwoNum(number1 , number2){
//     console.log(number1 + number2)
// }
// const result = addTwoNum(3,5);
// console.log("Results" ,result)


function addTwoNum(number1 , number2){
    // let result = number1 + number2;
    // return result
    return number1+ number2
}
const result = addTwoNum(3,5);
// console.log("Results", result)

function loginUserMessage(username = "sanny"){
    // if(username === undefined){
    //     console.log("plz enter username")
    //     return
    // }
    if(undefined){
        console.log("plese enter name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

let val1 = 10;           // Declare variable val1 and assign value 10
let val2 = 8;            // Declare variable val2 and assign value 8

function addnum3(num1, num2) {   // Define a function that takes two arguments
    let total = num1 + num2;     // Add the arguments and store the result in 'total'
    return total;                // Return the sum
}

let result1 = addnum3(val1, val2);   // Call addnum3 with val1 and val2 (10 + 8), store result in result1
let result2 = addnum3(20, 30);       // Call addnum3 with 20 and 30, store result in result2

console.log(result1, result2);       // Print both results: 18 and 50