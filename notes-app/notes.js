const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
  return 'Your notes...'
}

const addNote = function(title, body) {
  const notes = loadNotes()
  //중복되는 data는 추가하지 X -> filter
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  }) //notes array의 subset을 return할 filter -> 그걸 편의상 note라고 이름붙인 것

  //0은 false로 간주되므로
  if(duplicateNotes.length === 0) {
    //object를 append(추가됨)
    notes.push({
      title: title,
      body: body
    })
    //바뀐 data를 notes에 save
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  }
  else{
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes) // object를 JSON 포맷의 문자열(string)로 바꿔줌
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON) // JSON 포맷으로 되어 있는 문자열(string)을 JSON 객체로 변환
  } catch(e) {
    return [] //empty array return
  }
}
const removeNote = function(title) {
  const notes = loadNotes()
  // 배울점 1 + filter 함수 사용법
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title
  })
  // 배울점 2: 길이로 비교
  if(notes.length>notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
  }
  else {
    console.log(chalk.red.inverse('No note found!'))
  }

  saveNotes(notesToKeep)
}

// 내가 짠 코드
// const removeNote = function(title) {
//   const notes = loadNotes()
//   let noTitle = true
//   const targetNote = notes.filter(function(note) {
//     if(note.title === title) {
//       noTitle = false // 이렇게하면 이 변수가 매번 바뀌겠네...
//       delete note // delete operator deletes only a reference, never an object itself. Since Javascript is garbage collected, you don't need to delete objects themselves - they will be removed when there is no way to refer to them anymore.
//       const dataJSON = JSON.stringify(notes)
//       fs.writeFileSync('notes.json', dataJSON, 'utf8', 0o666, 'wx')
//     }
//   })
//   if(noTitle) {
//     console.log("There is no note having corresponding title")
//   }
// }

//여러개 export할 때는 single function 주지 않고 object를 줘서 multiple properties를 접근할 수 있게!
// property : 진짜 function 이름
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}