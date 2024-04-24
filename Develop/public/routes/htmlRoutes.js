const path = require('path');
const router = require('express').Router();

// GET Route for homepage
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../notes.html'))
);

module.exports = router;