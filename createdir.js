const fs = require('fs');

if (!fs.exists('views')){
    fs.mkdir('views',(err)=>{
        if (err) return err;
        console.log('the directory has been created');
        fs.writeFile('./views/new.html','i am the data of the view',(err)=>{
            if (err) return err;
            console.log('the file has been created');
        });
    });
}