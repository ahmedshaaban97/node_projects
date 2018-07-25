var readline = require('readline');
var util = require('util');
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question('what is your name? ',(name)=>{
    rl.setPrompt(`${name} how old are you?`);
    rl.prompt();
    rl.on('line',(age)=>{
       if (age < 18){
           util.log(`${name} you are not old enough`);
            rl.close();
       }else {
           util.log(`${name} you are  old enough to enter`);
           rl.close();
       }
    });
})