// here i am importing express from node_modules
const express = require('express');
var bodyParser = require('body-parser');
const server = express();
const PORT = 8888;

// function middleware(request,response,next){
//     // if is authe proceed with function
//     // else give a 404

//     console.log('inside middleware');
//     next();
//     // if next is there -> it will call the next fun
//     // else
// }

server.use(bodyParser.json());

// localhost:PORT -> server should listen to me on this port 

function started() {
    console.log(`server has been started on http://localhost:${PORT}`)
}

function handleEmptyRoute(request, response) {
    // console.log(request);
    // console.log(request.query);
    // query is used to access query param from browser
    // response.send(`hello world, this is my first API ${request.query.q}`);
    console.log('inside empty route');
    let obj = {
        a: 'hello',
        b: 'our api sending obj/json',
    }
    response.send({ obj });
}

function handleSumRoute(request, response) {
    response.send(`sum of first ${request.query.number} numbers is ${calculateSum(request.query.number)}`);
}

function handleHTMLRoute(request, response) {
    response.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        hello
    </body>
    </html>`)
}

function handleHTMLFileRoute(request,response){
    response.sendFile(__dirname+'/test.html');
}

function handleBody(request,response){
    console.log(request.body);
    response.send('testing reqest.body');
}

server.get('/', handleEmptyRoute); // server.use(someFn) -> someFn will run -> then handleEmptyRoute run
server.post('/body', handleBody); // 
server.get('/sum', handleSumRoute);
server.get('/html', handleHTMLRoute);
server.get('/htmlFile', handleHTMLFileRoute);

function handlePost(request,response){
    response.send(`hey this is /test -> get request ${calculateSum(request.headers.test)}`);
}

function handleGetRequest(request,response){
    
    response.send('this is a get request');
}

server.post('/test',handlePost);
server.get('/test',handleGetRequest);


server.listen(PORT, started);


function calculateSum(count) {
    var sum = 0;
    for (var i = 0; i < count; i++) {
        sum += i;
    }
    return sum;
}
// server.listen -> port and the first function that should run

// http://localhost:8888/
// empty route -> there's nothing after URL


// https://www.google.com/search?q=test
//&sca_esv=557489608&sxsrf=AB5stBh40Y8wq1WsFUWBz5sGYdVEYclc-g%3A1692202183799&source=hp&ei=x_TcZNe4LsOw2roPvdG4oAg&iflsig=AD69kcEAAAAAZN0C10sgPwEDW8rT1HVXoVM8r7Pnzybd&ved=0ahUKEwiXuLSwyOGAAxVDmFYBHb0oDoQQ4dUDCAk&uact=5&oq=test&gs_lp=Egdnd3Mtd2l6IgR0ZXN0MgcQIxiKBRgnMgsQABiKBRixAxiRAjIIEAAYigUYkQIyBxAAGIoFGEMyDRAAGIoFGLEDGIMBGEMyBRAAGIAEMhEQLhiABBixAxiDARjHARjRAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgUQABiABEjbBVAAWJ8DcAB4AJABAJgBfKABxQOqAQMwLjS4AQPIAQD4AQHCAgsQABiKBRixAxiDAcICDRAuGIoFGMcBGNEDGEPCAgcQLhiKBRhDwgITEC4YigUYsQMYgwEYxwEY0QMYQw&sclient=gws-wiz


// client -> browser -> query params, headers and body

// GET -> ✅
// POST -> 
    // query param -> ✅ (passing data through URL) request.query
    // headers -> ✅ (passing data through headers) (use postman to get code or test) request.headers
    // body -> request.body
// Delete -> id
    // query param -> ✅
    // headers -> ✅
    // body
// PUT -> id(what ever you do in delete method) and updated data
    // query param -> ✅
    // headers -> ✅
    // body


    // PUT -> ID + POST

    // body -> ???


