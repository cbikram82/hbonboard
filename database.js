const {Client} = require('pg');

const client = new Client({
    host: 'sbadb-1.c8ikdnliwh3x.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'sbapostgres',
    password: 'Ruhi0707#',
    database: 'postgres',
});
const usr = 'bikramemp@test.com';
//checkCreds(usr);
client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack))

  var result = client.query('SELECT role FROM hbuser WHERE username = $1', [usr], (err, res) =>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end((err) => {
        console.log('client has disconnected')
        if (err) {
          console.log('error during disconnection', err.stack)
        }
      })
    
})

