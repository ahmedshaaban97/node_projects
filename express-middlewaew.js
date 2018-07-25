const express = require('express');
let app = express();
const port = process.env.PORT || 9999;


app.use('/css',express.static(__dirname + '/public'));

app.use('/hello',(req,res,next)=>{
    console.log('i am the middle ware');
    next();
});

app.get('/',(req,res)=>{
    res.send(`
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
</head>
<body>
<h1>ji this is ahmed shaaban speaking to you</h1><br>
<h1>can you hear me </h1>
</body>
</html>
    
    `);
});
app.listen(port);
console.log('it is working');