const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index.js');
// const notes = require('./notes.html');
// const index = require('./index.html');

const PORT = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data - FROM OLD ASSIGNMENT, UNSURE IF NEEDED
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
