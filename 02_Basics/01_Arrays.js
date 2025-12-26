// array

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["spiderman" , "ironman", "thor"]

const newArr = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArr)

// Array Methods

//myArr.push(6) // add the elemet end
// myArr.pop()// delete the elemet end
//myArr.unshift(9)// add the elemet start
//myArr.shift() // delete the elemet start
//console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(4)) //4

// const newArr1 = myArr.join()
// console.log(myArr);
// console.log(newArr1)

// slice, splice

console.log("A",myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log("B",myArr) //[ 0, 1, 2, 3, 4, 5 ]
console.log(myn1) // [1, 2]


const myn2 = myArr.splice(1,3)
console.log("C",myArr) //[ 0, 4, 5 ]
console.log(myn2) //[ 1, 2, 3 ]

