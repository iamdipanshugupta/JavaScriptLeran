const Coding = ['JavaScript', 'PHP', 'Ruby', 'Python', 'C++'];


// Coding.forEach( function(val){
//     console.log(val);
// } )

// Coding.forEach( (item)=>{
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item)
// }

// Coding.forEach(printMe);

// Coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// })


const myCoding = [
    {
        languagename : 'JavaScript',
        type : 'Front-End',
        fileExtension : '.js'
    },
    {
        languagename : 'PHP',
        type : 'Back-End',
        fileExtension : '.php'
    },
    {
        languagename : 'Ruby',
        type : 'Back-End',
        fileExtension : '.rb'
    },
    {
        languagename : 'Python',
        type : 'Back-End',
        fileExtension : '.py'
    },
    {
        languagename : 'C++',
        type : 'Back-End',
        fileExtension : '.cpp'
    }
]

myCoding.forEach( (item ) => {
    console.log(item.fileExtension);
})








































