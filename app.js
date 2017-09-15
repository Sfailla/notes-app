// Call in our NPM packages
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
// Call in all our exports from notes.js
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Title of body',
    demand: true,
    alias: 'b'
}
// Yargs init and customization
const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'list all notes')
.command('read', 'read a note', {
    title: titleOptions,
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;

let command = argv._[0];
console.log('command: ', command);

let sayMessage = () => {
    if (!sayMessage.length) {    
    return console.log('Getting all the notes');
    } else {
        return '';
    }
}

// Here I use a switch statement to control what command line variable does what.
// You can add any case string to the command line when you run this file with node. 
// However You have to add a --title flag and a --body flag 
// For Example $ node app.js add --title="My Name and Age" --body="Steven Faill, 34"
switch(command) {
    case 'add':
    console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('note created');
            notes.logNote(note);
        } else {
            console.log('sorry that title is taken');
        }
    break;
    case 'list':   
    sayMessage() 
    notes.getAll();    
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
    break;
    case 'read': 
    console.log('Reading a note');
    var note = notes.getNote(argv.title);
        if (note) {
            console.log('note read');
            notes.logNote(note);
        } else {
            console.log('note not found');
        }
    break;
    case 'remove':
    console.log('Removing a note');
    var noteRemoved = notes.removeNote(argv.title);
    var message = !noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
    break;
    default:
    console.log('Sorry no Info');    
}




