require('./dbtest.js');
const express = require('express');
const { apifunct } = require('./dbtest.js');
//const { dbquery } = require('./dbtest.js');

const app = express();

app.get('/', (req, res) => {
     
    
    //dbquery("bikramemp@test.com");
    var result =  apifunct('bikramemp@test.com')
    .then(r=>{
        console.log("r=" + r.role);
    });
    console.log("here is the result : " + result);
    res.send(result);
});

app.listen(9229, () => {
    console.log('Express app listening on port 3000');
});

