

const express = require('express');

const notesRouter = require('./notes');
const homeRouter = require('./home');

const app = express();

app.use('/', notesRouter);
app.use('/', homeRouter);

module.exports = app;