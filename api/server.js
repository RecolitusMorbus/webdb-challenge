const express = require('express');

/* MIDDLEWARE */
const server = express();
server.use(express.json());

/* ROUTER */


/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`You have reached the root directory. Please enjoy your stay.`);
});

module.exports = server;