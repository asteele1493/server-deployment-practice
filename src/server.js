const express = require('express');
const server = express();

//This server is correct when:

//When you ask for '/home', you receive 'Welcome home!'

server.get('/home', (_, res) => res.send('Welcome home!'));

//When you ask for '/bye', you receive 'See ya later, alligator!'

server.get('/bye', (_, res) => res.send('See ya later, alligator!'));

server.get('/person', (req, res ) => {
  if (req.query.name) {
    res.status(200).send({ name: req.query.name });
  } else {
    res.status(500).send();
  }
});


//error handler example
server.use('*', (_, res) => res.status(404).send('no pathway found.'));


//throw an exception
server.get('/throw_error', () => {
  throw new Error ('Yikes!');
});

//throw an error & pass it
server.get('/pass_error', (req, res, next) => {
  next('Something v bad');
});

//generic error handler. Something bad happened and we don't know what it was.
server.use((err, req, res, next) => {
res.status(500).send({ message : 'There was a problem!', err});
});

module.exports = server;
