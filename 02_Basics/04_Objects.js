// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123Dipu"
tinderUser.name = "dipanshu"
tinderUser.age = 21
tinderUser.IsLoggedIn = true
// console.log(tinderUser)

const regularuser = {
    email : "dipanshu2123@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Dipanshu",
            LastNmae : "Gupta"
        }
    }
}
// console.log(regularuser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1 , obj2} // array format
// const obj3 = Object.assign({},obj1 , obj2) // object format

const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        email : "d2@gmail.com"
    },
    {
     id :2,
     email : "d3gmail@com"
    }
]

// console.log(users[0].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));






const course = {
    coursename : "js in hindi",
    price : 999,
    courserInstructor : "Hitesh"
}

// course.courserInstructor
 

const {courserInstructor : instructor} = course

// console.log(courserInstructor)

console.log(instructor);


// {
//     "name" : "dipanshu",
//     "coursename" : "js inhindi",
// }
[
    {},
    {},
    {}
]