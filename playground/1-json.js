const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
}

// javascript method that takes in an object or an array or any value for that matter and it returns the Jason string representation.
const bookJSON = JSON.stringify(book)
console.log(bookJSON) // double quotes have been added to all property names, JSON is a string not an object 그래서 bookJSON.title 하면 undefined 뜸 물론 book.titleg하면 뜸 book은 object니까

// takes in the JSON string and gives us back the object
const parseData = JSON.parse(bookJSON)
console.log(parseData.author) //object니까 property에 접근 가능

