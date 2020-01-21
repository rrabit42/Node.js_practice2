const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(process.argv)

if(command === 'add'){
  console.log('Adding note!')
}
else if(command === 'remove'){
  console.log('Removing note!')
}

//argument vector : array that contains all of the arguments provided
//항상 2개는 디폴트로 리턴됨
// 하나는 path to the node.js executable on your machine
// 두번째는 path to our app.js file
// 그 이후는 우리가 제공한 arguments