const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//
// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // you have to provided it in order for the command, 값이 안주어지면 boolean으로 들어감!
      type: 'string'
    },
    body: {
      describe: 'Note body', //help content에서 보여줌
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('Removing the note')
  }
})

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

// printing the argvs makes all of this work! Yargs knows to actually do its thing and pass those arguments
// console.log(yargs.argv)

yargs.parse()
// 얘는 argv넘겨줄 필요가 없음

