const express = require('express');
const bodyparser = require('body-parser');
let app = express();
const port = process.env.PORT || 9999;

// app.use(bodyparser.json());
app.use('/css',express.static(__dirname + '/public'));

app.use('/hello',(req,res,next)=>{
    console.log('i am the middle ware');
    next();
});


app.listen(port);
console.log('it is working');