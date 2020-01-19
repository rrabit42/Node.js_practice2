console.log('utils.js')

//app.js has it's own scope with its own variables and utils.js has its own scope with its own variables
//So we need to explicitly export all of this stuff!! --> module.exports
const name='Mike'

const add = function(a, b){
  return a + b
}

//other files can share this variable
module.exports = add