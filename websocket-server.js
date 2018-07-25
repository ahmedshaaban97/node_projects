const websocket = require('ws').Server;
const wss = new websocket({port : 3332});



wss.on('connection',(ws)=>{


    ws.on('message',(message)=>{
        wss.clients.forEach((client)=>{
            client.send(message);
        });
        //console.log(message);
    });

    console.log('we are connected');
});
