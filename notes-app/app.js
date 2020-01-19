const fs = require('fs') // fs module is stored in variable
//if we use filesystem as name

//this should be filesystem.writeFileSync too.
//http://nodejs.org/dist/latest-v11.x/docs/api/
//read official docs
fs.writeFileSync('notes.txt', 'My name is Andrew.')

//
// Challenge: Append a message to notes.txt
//
// 1. User appendFileSync to append to the file(sync가 붙은 함수는 동기적 읽기, 붙지 않은 것은 비동기적 읽기)
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
fs.appendFileSync('notes.txt', ' challenge succeed!!')
