// for of

// [" " , "", ""]
// [{},{},{}]
 

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    //console.log(num);
}

const greetings = "HelloWorld";
for (const greet of greetings) {
    //console.log(greet);
}


// // for in

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (const key in person) {
//     console.log(key + ": " + person[key]);
// }

// Maps

const map = new Map();
map.set('name', 'Dipanshu');
map.set('age', 24);
map.set('city', 'New Delhi');

//console.log(map);
for (const [key , value] of map) {
   // console.log(key + " : " + value);
}

const MyObject = {
    'game1' : 'chess',
    'game2' : 'football',
    'game3' : 'hockey',
    'game4' : 'cricket'
};

// for (const [key , value] of MyObject) {
//     console.log(key + " : " + value);
// } // error: MyObject is not iterable

for (const key in MyObject) {
    console.log(key + " : " + MyObject[key]);
}