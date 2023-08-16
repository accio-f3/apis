// here i am importing express from node_modules
const express = require('express');
const server = express();
const PORT = 8888;


// localhost:PORT -> server should listen to me on this port 

function started(){
    console.log(`server has been started on http://localhost:${PORT}`)
}

function handleEmptyRoute(request,response){
    response.send('hello world, this is my first API');
}

function handleSumRoute(request, response) {
    response.send(`sum of first 30 numbers is ${calculateSum(30)}`);
}

server.get('/', handleEmptyRoute);
server.get('/sum', handleSumRoute);

server.listen(PORT, started);


function calculateSum(count){
    var sum=0;
    for(var i=0;i<count;i++){
        sum+=i;
    }
    return sum;
}
// server.listen -> port and the first function that should run

// http://localhost:8888/
// empty route -> there's nothing after URL
