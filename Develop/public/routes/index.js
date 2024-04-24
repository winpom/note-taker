const path = require('path');
const router = require('express').Router();
const store = require('C:/Users/winpo/Desktop/Coding/Modules/note-taker/Develop/db/store.js')

// GET request for reviews
router.get('/api/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes)
    }).catch((error) => res.status(500).json(error))
    console.info(`${req.method} request received to get notes`);
});

router.post('/api/notes', (req, res) => {
    store.addNotes(req.body).then((note) => {
        return res.status(200).json(note)
    }).catch((error) => res.status(500).json(error));
    console.info(`${req.method} request received to add a note`);
})

// POST request to delete a review
router.delete('/api/notes/:noteId', (req, res) => {
    store.deleteNotes(req.params.noteId).then(() => {
        res.status(200).json({ deleted: true, id: req.params.noteId })
    }).catch((error) => res.status(500).json(error));
    console.info(`${req.method} request received to delete a note`);
})

// GET Route for homepage
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;