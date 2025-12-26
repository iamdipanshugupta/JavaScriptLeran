const marvelheros = ["thor", "ironman","spiderman"]
const dcheroes = ["superman", "flash","batman"]

// marvelheros.push(dcheroes)
// console.log(marvelheros)

// const heroes = marvelheros.concat(dcheroes)
// console.log(heroes)

const allheroes = [...marvelheros,...dcheroes] // spread opreator
// console.log(allheroes)

const anotherarray = [1,2,3,[4,5,6],7,[8,9,[4,5]]]

const realarray = anotherarray.flat(Infinity)
// console.log(realarray)





console.log(Array.isArray("Dipanshu") // false
)
console.log(Array.from("Dipanshu")) /*[
  'D', 'i', 'p',
  'a', 'n', 's',
  'h', 'u'
] */

  console.log(Array.from({name:"Xyz"})) // intresting


  let score = 100
  let score1 = 200
  let score2 = 300

  console.log(Array.of(score, score1,score2))





