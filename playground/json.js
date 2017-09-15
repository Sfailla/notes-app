// var obj = {
//     name: 'Andrew'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString = '{"name": "Steve", "age": 34 }';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person.name);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json', 'utf8');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);