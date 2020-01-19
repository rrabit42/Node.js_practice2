const add = require('./utils.js') //then utils.js runs too~
//인자를 export해주니까 받아야함!

const sum = add(4,-2)

//그냥 console.log(add(4,-2))해도 됨!
console.log(sum)

//
//Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console


const getNotes = require('./notes.js')

console.log(getNotes());
//console.log(getNotes)하면 [Function: getNotes]가 출력됨! 이게 뭘까?!