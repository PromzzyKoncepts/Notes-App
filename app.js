// const fs = require('fs');
// fs.writeFileSync('notes-app.txt', 'this is overlapping the former text')
// fs.appendFileSync('notes-app.txt', 'this is a message to append to the file')
// const notes = require('./notes.js');
// const yargs = require('yargs');
// const chalk = require('chalk');
import yargs from "yargs"
import chalk from "chalk"
// console.log(process.argv)
// console.log(yargs.argv)

// create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  handler: function () {
    console.log("adding a new note")
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log('removing a note')
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler: function () {
    console.log('listing out all notes')
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function () {
    console.log('reading a note')
  }
})


console.log(yargs.argv)

