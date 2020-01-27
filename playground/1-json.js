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


//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const testJSON = fs.readFileSync('1-json.json').toString()

const test = JSON.parse(testJSON)

test.name = 'SeoYoung'
test.age = 20

const againJSON = JSON.stringify(test)

fs.writeFileSync('1-json.json',againJSON)