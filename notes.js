// const fs = require('fs')
import fs from 'fs';
import chalk from 'chalk'
const getNotes = () => {
  return "your notes";
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const dupNotes = notes.filter((note) => (note.title === title))

  if (dupNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Note added successfully'))

  }
  else {
    console.log(chalk.red.inverse('Note title has been taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  // here i filter the notes array to filter out all titles that dont match with the specified title, thereby removing the specified note title

  const filteredNotes = notes.filter((note) => (note.title !== title
  ))

  // here i gave a condition stating that if the note array > filtered one, pass a successfull message else pass an error message using chalk

  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse('note successfully deleted'))
    saveNotes(filteredNotes)

  }
  else {
    console.log(chalk.red.inverse('No Note found'))
  }

}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.inverse('All Available Notes'))
  notes.forEach(note => {
    console.log('Title: ' + note.title + ' Body: ' + note.body);
  });

}

const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }
  else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}


const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  // use try and catch method to check if the file exists, else return an empty array
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch (e) {
    return []
  }

}
export { getNotes, addNote, removeNote, listNotes, readNotes }

// module.exports = {
//   getNotes: getNotes,
//   addNote: addNote 
// }