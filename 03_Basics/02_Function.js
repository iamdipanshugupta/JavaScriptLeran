function calculateCartPrice(val1,val2, ...num1){ // restopreator
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username : "dipanshu",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) //username is dipanshu and price is 199

// handleObject({
//     username : "sam",
//     price : 399
// }) //username is sam and price is 399


const myNewArray = [200,400,600]

function returnSecondValue(getArray){
   return getArray[0]
}
// console.log(returnSecondValue(myNewArray))  //200

console.log(returnSecondValue([200,400,500,1000]));
