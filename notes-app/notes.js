const fs = require('fs')

const getNotes = function(){
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  //중복되는 data는 추가하지 X -> filter
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  }) //notes array의 subset을 return할 filter -> 그걸 편의상 note라고 이름붙인 것

  //0은 false로 간주되므로
  if (duplicateNotes.length === 0) {
    //object를 append(추가됨)
    notes.push({
      title: title,
      body: body
    })
    //바뀐 data를 notes에 save
    saveNotes(notes)
    console.log('New note added!')
  }
  else{
    console.log('Note title taken!')
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) {
    return [] //empty array return
  }
}

//여러개 export할 때는 single function 주지 않고 object를 줘서 multiple properties를 접근할 수 있게!
// property : 진짜 function 이름
module.exports = {
  getNotes: getNotes,
  addNote: addNote
}