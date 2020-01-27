const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// what comes back is not a string, it is actually a buffer which is a way for node.js asked to represent binary data
const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// 이렇게하면 binary로 보임 따라서 아래와 같이 하기!
//console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

