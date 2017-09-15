const fs = require('fs');
// Fetches and parses all the notes 
let fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data-json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}
// Saves a note as a string into the notes-data-json file
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data-json', JSON.stringify(notes));
}
// Adds a note to notes-data-json file
let addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => {
    return note.title === title;
    });
    

    if (!duplicateNotes.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
// Gets and returns all Notes in console
let getAll = () => {
    console.log('Getting all the notes');
    return fetchNotes();
}
// Gets and returns a single Note in the console
let getNote = (title) => {
    console.log('Getting a note called: ', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
    };
// Removes a Note by its Title and logs it to the console
let removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);   
    if (notes.length !== filteredNotes.length) {
        console.log('note successfully removed');        
    }
}

var logNote = (note) => {
    debugger;
    console.log('--')
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
}
// exports our functions to app.js
module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote: logNote
}
