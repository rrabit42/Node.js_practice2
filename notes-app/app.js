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

//
// Challenge: Add two new commands
//
// 1. Set up command to support "list" command (print placeholder message for now)
// 2. Set up command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function(){
    console.log('Listing out all note')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log('Reading a note')
  }
})

console.log(yargs.argv)
