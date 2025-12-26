class User {
    constructor(username){
        this.uesrname = username
    }

    logMe(){
        console.log(`username is ${this.uesrname}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email =  email;
        this.password - password
    }

    addCourse(){
        console.log(` A new course was added by ${this.uesrname}`)
    }
}

const chai = new Teacher("Dipanshu", "chail@gmail.com" ,"123") 
chai.addCourse()

const MasalaChai = new User("hitesh")
MasalaChai.logMe()

console.log(chai instanceof User)