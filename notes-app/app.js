const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Challenge 1: Setup command option and function
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

//
// Challenge 2: Wire up removeNote
//
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

//
// Challenge 3: Use chalk to provide useful logs for remove
//
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with a red background


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
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title)
    console.log("Remove "+argv.title+" note.")
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

