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

    // await client.query(
    //   "SELECT role FROM hbuser WHERE username = $1",
    //   [usr],
    //   (err, res) => {
    //     if (!err) {
    //       console.log("result is " + res.rows);
    //       x = res.rows[0].role;
    //       console.log("x=" + x);
    //     } else {
    //       console.log(err.message);
    //     }
    //     client.end((err) => {
    //       console.log("client has disconnected");
    //       if (err) {
    //         console.log("error during disconnection", err.stack);
    //       }
    //     });
    //   }
    // );

  //var result = client.query()

  const text = "SELECT role FROM hbuser WHERE username = $1";
  const value = [usr];

//   // callback
//   client.query(text, value, (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.rows[0]);
//     }
//   });

  // promise
  //   client
  //     .query(text, value)
  //     .then(res => {
  //       console.log(res.rows[0])
  //     })
  //     .catch(e => console.error(e.stack))

  // async/await
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
