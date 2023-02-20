const { Client } = require("pg");

async function dbquery(usr) {
  const client = new Client({
    host: "sbadb-1.c8ikdnliwh3x.us-east-1.rds.amazonaws.com",
    port: 5432,
    user: "sbapostgres",
    password: "Ruhi0707#",
    database: "postgres",
  });
  //const usr = 'bikramemp@test.com';
  var x = "";
  client
    .connect()
    .then(() => console.log("connected"))
    .catch((err) => console.error("connection error", err.stack));

  const text = "SELECT role FROM hbuser WHERE username = $1";
  const value = [usr];

  try {
    const res = await client.query(text, value);
    console.log(res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
  }
  client.end((err) => {
    console.log("client has disconnected");
    if (err) {
      console.log("error during disconnection", err.stack);
    }
  });

  //console.log("returning results" + x);
}

module.exports = {
  apifunct: dbquery,
};
