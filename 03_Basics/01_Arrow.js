const user = {
    username : "dipanshu",
    price : 99,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this)

// function chai(){
//      let username = "hitesh"
//     console.log(this.username) //  undefined
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this)
}
// chai()

// const addTwo = (num1 , num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))  //7

// const addTwo = (num1 , num2)=> num1 +num2
// console.log(addTwo(5,8))  //13

// const addTwo = (num1 , num2) => (num1  + num2)
// console.log(addTwo(8,9)) //17


const addTwo = (num1 , num2)=> ({username : "Dipansu"})
console.log(addTwo(4,5))

// const myArray = [2,4,6,7,8]

// myArray.forEach(() => {

// })