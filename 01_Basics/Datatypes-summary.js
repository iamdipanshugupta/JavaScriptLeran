// primitive data-types
// string int boolen null undefined symbol Bigint 

const score = 11
const  name = "dipanshu"
const bollean = true
const state = null;
const id = Symbol(123)
const anotherid = Symbol(123)
console.log(id === anotherid)

const bignumber = 144555552n

console.log(typeof anotherid)

// refrence (non-primitive data types)

// arrays object function

const heros = ["superman" , "ironman", "thor"];
const myid = {
    name : "dipanshu",
    age : 21,
    isLoogedin : false,
}

const myfunction = function(){
    console.log("hello funtion")
}

console.log(typeof myid);








// ++++++++++++++++= Memory +++++++++++++++++++++

// Stack (primitive) , Heap(non-primitive)

let myinstaname = "imadipanhugupta";
let anothername = "dipanshu gupta";

// console.log(myinstaname)
// console.log(anothername);

let userone = {
    email : "user@google.com",
    upi : "upi@gmauljddj"

}

let usertwo = userone

usertwo.email = "dipanshu@gmail.com"
console.log(userone.email)
console.log(usertwo.email)