const server = require('./api/server.js');

const port = process.env.port || 8000;

server.listen(port, () => {
  console.log(`/***  Server Running on ${port} ***/`);
});