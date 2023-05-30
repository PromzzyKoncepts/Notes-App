// const fs = require('fs');
// fs.writeFileSync('notes-app.txt', 'this is overlapping the former text')
// fs.appendFileSync('notes-app.txt', 'this is a message to append to the file')
// const yargs = require('yargs');
// const chalk = require('chalk');
// console.log(process.argv)
// console.log(yargs.argv)


// const notes = require('./notes.js');
import { addNote, removeNote } from "./notes.js"
import yargs from "yargs"
import chalk from "chalk"

// create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    addNote(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    removeNote(argv.title)
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


// console.log(yargs.argv) or 
yargs.parse()

