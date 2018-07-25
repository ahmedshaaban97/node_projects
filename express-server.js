const express = require('express');
let app = express();
const port = process.env.PORT || 9999;


app.get('/hello',(req,res)=>{
    res.send('<h1>hello man</h1>')
});
app.listen(port);
console.log('it is working');