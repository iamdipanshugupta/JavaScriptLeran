const Coding = ['JavaScript' , 'PHP' , 'Ruby' , 'Python' , 'C++'];

// const valuesCoding = Coding.forEach((item) =>{
//    // console.log(item);
//     return item;
//     //
// })
// console.log(valuesCoding); // undefined

// forEach does not return any value
// It simply executes the provided function once for each array element. 
// Therefore, the return value of forEach is always undefined.


const myNumbers = [1,2,3,4,5,6,7,8,9,10];  

const newNums = myNumbers.filter( (num) => num > 4 );
//console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]  

const newNums2  = myNumbers.filter( (num2) => {
    return num2 ;
});
console.log(newNums2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// filter method expects a boolean return value to determine if an element should be included in the new array. 


const newNums1 = []

myNumbers.forEach( (num1) => {
    if(num1 > 4){
        newNums1.push(num1);
    }
})
console.log(newNums1); // [ 5, 6, 7, 8, 9, 10 ]
// Here, we manually create a new array (newNums1) and use forEach to iterate over myNumbers. 
// Inside the loop, we check if each number is greater than 4, and if so, we push it into newNums1. 
// This achieves the same result as filter but requires more code and is less efficient.













































