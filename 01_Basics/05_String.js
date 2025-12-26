const name ="dipanshu-sah"
const repoCount = 50
//console.log(name + repoCount  + " value")

console.log(`Hello my name is ${name} and may rep count is ${repoCount}`);

const gameNew  = new String('dipanshu-sah-com')
// console.log(gameNew) 
// console.log(gameNew[0]) // d
// console.log(gameNew.__proto__)  //{}

// console.log(gameNew.length) //8
// console.log(gameNew.toUpperCase()) // DIPANSHU
// console.log(gameNew.charAt(2))//p
// console.log(gameNew.indexOf('p')) //2


const newString = gameNew.substring(0,4)
console.log(newString )

const anotherString = gameNew.slice(-8,6)
console.log(anotherString)

const newStringone ="    dipanshu    "
console.log(newStringone) //    dipanshu    
console.log(newStringone.trim()) // dipanshu

const url = "https://dipanshu.com/dipanshu%20sah"

console.log(url.replace('%20','-'))

console.log(url.includes('kumar'))

  
console.log(gameNew.split('-'))