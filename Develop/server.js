const express = require('express');
const router = require('./public/routes/routerHub');

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
