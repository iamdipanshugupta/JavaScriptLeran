// let a = 10 ;
// const b = 20;
// var c = 30;
// var c = 300
let a = 100
if (true) {
  let a = 10;
//   const b = 20;
//   console.log("inner " , a)
}

// console.log(a);
// console.log(b);




function one(){
    const username = "dipanshu"


    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // website
    two()
}
// one() // dipanshu

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website) // hiteshyoutube
    }
    // console.log(website) //error
}
// console.log(username) //error


// +++++++++++++++++++++++++++++ intersting question ++++++++++++++++++++++++++++++++++

// console.log(addone(5)) //6
function addone(num){
    return num+1
}


// console.log(addtwo(5)) // error beacuse ye vaiables mai store hai
const addtwo  = function(num){
    return num+2
}
// console.log(addtwo(5)) //7










