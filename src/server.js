const express = require('express');
const server = express();

//This server is correct when:

//When you ask for '/home', you receive 'Welcome home!'

server.get('/home', (_, res) => res.send('Welcome home!'));


//When you ask for '/bye', you receive 'See ya later, alligator!'

server.get('/bye', (_, res) => res.send('See ya later, alligator!'));

module.exports = server;