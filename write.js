const fs = require('fs');

fs.writeFile('./written/data.html','hello i am the new file','utf8',(err)=>{
    if (err) return err;
    console.log("the file has been created");
});

fs.appendFile('./written/data.html',`\n i am from the append extra`,'utf8',(err)=>{
    if (err) return err;
    console.log("the extra has been added");
});