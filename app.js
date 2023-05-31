// const fs = require('fs');
// fs.writeFileSync('notes-app.txt', 'this is overlapping the former text')
// fs.appendFileSync('notes-app.txt', 'this is a message to append to the file')
// const yargs = require('yargs');
// const chalk = require('chalk');
// console.log(process.argv)
// console.log(yargs.argv)


// const notes = require('./notes.js');
import { addNote, removeNote, listNotes, readNotes } from "./notes.js"
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
  handler: (argv) => {
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
  handler: (argv) => {
    removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'list all notes',
  builder: {
    title: {
      describe: "Note title",
      demandOption: false,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: false,
      type: 'string'
    }
  },
  handler: (argv) => {
    listNotes(argv.title, argv.body)
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: false,
      type: 'string'
    }
  },
  handler: (argv) => {
    readNotes(argv.title, argv.body)
  }
})


// console.log(yargs.argv) or 
yargs.parse()

