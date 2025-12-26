// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number")
    }
    //console.log(element);
    
    
}

// console.log(element); // error
for(let i = 1 ; i <= 10 ; i++){
    // console.log(`outer loop value is : ${i}`);
    for(let  j = 1; j <= 10 ; j++){
        //console.log(`inner loop value is : ${j}`);
       // console.log(i + '*' + j + '=' + (i*j));
    }
}

let myArray = ["flash", "superman", "batman", "wonderwoman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)

}
 // break and continue
 for (let i = 1; i <= 10; i++) {
    if(i == 4){
       //console.log("5 is best number")
       continue;
    }
    //console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if(i == 4){
       console.log("5 is best number")
       break;
    }
    console.log(i)
}