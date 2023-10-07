
//GET * should return the index.html file.
//

//GET /notes should return the notes.html file.
// GET /api/notes should read the db.json file and return all saved notes as JSON.
//POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

const { v4: uuidv4 } = require('uuid');
const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');


notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});



notes.delete('/:notes_id', (req, res) => {
  const noteId = req.params.notes_id;
  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
   
      const result = json.filter((notes) => notes.notes_id !== noteId);

   
      writeToFile('./db/notes.json', result);

  
      res.json(`Note ${noteId} has been deleted`);
    });
});


notes.post('/', (req, res) => {
  console.log(req.body);

  const {  } = req.body;

  if (req.body) {
    const newNote = {
     title,
     text,
     notes_id: uuidv4(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`New note added`);
  } else {
    res.error('Error in posting note');
  }
});

module.exports = notes;