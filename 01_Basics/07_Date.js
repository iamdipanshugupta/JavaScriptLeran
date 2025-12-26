// dates

let mydate = new Date()

// console.log(mydate)//2025-09-17T16:51:03.985Z

// console.log(mydate.toString()) //Wed Sep 17 2025 22:21:03 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString())//Wed Sep 17 2025
// console.log(mydate.toLocaleDateString())//17/9/2025
// console.log(typeof mydate)//object

//let myCreateDate = new Date(2025, 0 , 25)
//let myCreateDate = new Date(2025, 9 , 25, 5, 3)

//console.log(myCreateDate.toLocaleString())


let myceratedate = new Date("11-09-2025")
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myceratedate.getTime())
//console.log(Math.floor(Date.now()/1000))

let  newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))