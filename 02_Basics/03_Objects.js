// Objects &     Events

// singleton
// Object.create constructor method jaisa work karta hai sigleton main

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "dipanshu",
    age : 21,
    location : "Bihar",
    email : "diapnshu@gmail.com",
    isLoogedIn : false,
    lastLoginDays : ["Monday" , "Saturday"],
    [mySym]:"mykey1"
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "dipanshugupta@gmail.com"

// Object.freeze(JsUser)
JsUser.email = "dipanshu1234.gmailcom"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
// ...existing code...
JsUser.greeting();
JsUser.greeting2();
// ...existing code...