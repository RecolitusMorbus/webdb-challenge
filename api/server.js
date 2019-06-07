const express = require('express');
const projectsRouter = require('../routes/projects-router.js');
const actionsRouter = require('../routes/actions-router.js')

/* MIDDLEWARE */
const server = express();
server.use(express.json());

/* ROUTER */
server.use('/projects', projectsRouter);
// server.use('/actions', actionsRouter);

/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`You have reached the root directory. Please enjoy your stay.`);
});

module.exports = server;