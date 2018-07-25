const WS = new WebSocket('ws://localhost:3332');

WS.onmessage= (payload)=>{
    displaymessage(payload.data);
};

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function displaymessage(message){
    let h1 = document.createElement('h1');
    h1.innerText = message;

    document.querySelector('div.masseges').appendChild(h1);
}



WS.onopen = ()=>{
    displayTitle('connected to server');
};

WS.onclose = ()=>{
    displayTitle('disconnected to server');
};




document.forms[0].onsubmit = ()=>{

    let input =document.getElementById('message');
    //console.log(input.value);

    WS.send(input.value);
};