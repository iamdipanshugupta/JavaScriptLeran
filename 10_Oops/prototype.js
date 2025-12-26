// prototypes


// let myName = "hitesh       "
// console.log(myName.trim().length) // 6
// console.log(myName.trueLenght) // undefined


myHeros = ["thor","spiderman", "ironman"];

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present all is all objects`)
}


Array.prototype.heyhitesh = function(){
    console.log(`hitesh say hello`)
};
// heropower.hitesh()


// myHeros.hitesh()
// heropower.heyhitesh()

// inheritance

const User = {
    name : "chai",
    email:"chail@gmail.com"
}
const Teacher = {
    makevide: true,

}

const TeachingSupport = {
    isAvailable: false,

}

const TASupport = {
    makeAssigment : 'JS assigmnent',
    fullTime: true,
    __proto__:TeachingSupport,
}

Teacher.__proto__ =User
console.log(TeachingSupport)

// modern syntax 
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()