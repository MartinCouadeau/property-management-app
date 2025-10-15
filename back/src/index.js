const server = require('./app.js');
const { conn } = require('./db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then( async () => {
  server.listen(3001, () => {
    console.log('Listening at: http://localhost:3001/'); // eslint-disable-line no-console
  })
})
.catch((error) => console.log(error.message))