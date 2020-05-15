const server = require('./server.js');

const port = process.env.PORT || 1212;

server.listen(port, () => {
  console.log(`	💔	💔	LIVE ON ${port}	💔	💔`);
});