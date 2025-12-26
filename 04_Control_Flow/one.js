// if
// if(2 != "2"){
//     console.log("if");
// }
// else {
//     console.log("else");
// }


// const score = 200;

// if(score >= 100){
//     let power = "fly";
//     console.log(`you have ${power} power`);
// }


// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("ok");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedinFromGoogle = false;
const email = true;


if(userLoggedIn && debitCard){
    console.log("you can buy");
}

if(loggedinFromGoogle || email){
    console.log(" user logged in");
}