const { Client } = require('pg');

const client = new Client({
    host: 'sbadb-1.c8ikdnliwh3x.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'sbapostgres',
    password: 'Ruhi0707#',
    database: 'postgres',
});
if(client.connection._events != null)
client.connect()
 //client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database', err.stack));

console.log("in the db now....");

  var result = client.query('SELECT * FROM hbuser', (err, res) => {
    if (err) {
      console.log("inside the query err block....");
      console.error(err.stack);
    } else {
     // console.log(res);
    }
  });
  console.log("printing result....");
  console.log(result);

   client.end()
  .then(() => console.log('Connection closed....'))
  .catch(err => console.error('Error closing the connection', err.stack));
