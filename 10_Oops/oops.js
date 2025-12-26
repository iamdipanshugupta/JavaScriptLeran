// object literals

const user = {
    username : "hitesh",
    logincount : 8,
    signedIn :true,

    getUserDetails: function(){
        //console.log(" Got User deatils from database")
        //console.log(`username ${this.username}`)
        
    }
}

// console.log(user)
// console.log(user.getUserDetails())
//console.log(this) //{}


function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome ${username}`)
    }
    return this
}

const   UserOne = new User("dipanshu" , 12 , true)
const UserTwo = new User("chaiaurcode" , 11 , false)
console.log(UserTwo)
//console.log(UserOne)
