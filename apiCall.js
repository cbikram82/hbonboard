require("./dbtest.js");
const express = require("express");
const cors = require("cors");
const { apifunct } = require("./dbtest.js");
//const { dbquery } = require('./dbtest.js');

const app = express();
app.use(cors());

app.get("/user/:id", (req, res) => {
  const request = req.params.id;
  var result = apifunct(request).then((r) => {
    console.log("r=" + r.role);
    res.send(r.role);
  });
  console.log("here is the result : " + result);
  //res.send(result);
});

app.listen(9229, () => {
  console.log('Express app listening on port 9229');
});

// module.exports = app;

