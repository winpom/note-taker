const util = require('util');
const fs = require('fs');
const uuid = require('./uuid.js');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("./db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("./db/db.json", JSON.stringify(note, null, 4))
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsedNotes = []
            }

            return parsedNotes;
        })
    }

    addNotes(notes) {
        const { title, text } = notes;

        if (!title || !text)
            throw new Error("Must include a Title and Text")

        const newNote = {
            title,
            text,
            noteId: uuid(),
        };
        return this.getNotes().then((notes) =>
            [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes)
        .then(() => newNote)
    )}

    deleteNotes(noteId) {
        return this.getNotes().then((notes) => {
            notes.filter((note) => note.noteId !== id)
            .then((updatedNotes) => this.write(updatedNotes))
        })
    }
}

const a = new Store().getNotes().then((notes) => console.log(notes))

module.exports = new Store();