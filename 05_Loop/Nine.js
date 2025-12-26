const mynums = [1,2,3]
// const mytotal = mynums.reduce(function (acc , curval){
//     console.log(`acc : ${acc} and curval ${curval}`);
//     return acc + curval
// },0)

//const mytotal = mynums.reduce( (acc , curr) => acc + curr , 0 )


//console.log(mytotal)
 const shoppincart = [
    {
        itemname : "JsCourse",
        price : 299
    },
    {
        itemname : "PythonCourse",
        price : 399
    },
    {
        itemname : "mobileappweb",
        price : 499
    },
 ]

const pricetopay = shoppincart.reduce( (acc ,item) =>acc + item.price ,0 )
console.log(pricetopay)