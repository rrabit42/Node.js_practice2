const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    console.log('Adding a new note!!')
  }
})
//그러면 --help 옵션 입력했을 때 command에 내가 입력한 command가 뜸!

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('Removing the note')
  }
})

// add, remove, read, list

console.log(yargs.argv)
