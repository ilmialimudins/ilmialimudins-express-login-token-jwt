//create basic routing

const http = require('http');
const port = process.env.PORT|| 3001;

//http server handle request from browser
//setiap ada request harus ada respon
//localhost:3001
const server = http.createServer(function(req,res){ //Callback Function
if(req.url==='/')return responseText(req,res);
if(req.url==='/json')return responseJson(req,res);
responseNotFound(req,res);

});

function responseText(req,res){ //reguler function
    res.setHeader("Conter-Type", "text/plain");
    res.end('Hi bootcamp')    
}

function responseJson(req,res){
    res.setHeader("Conter-Type", "application/json");
    res.end(JSON.stringify({
        batch:"Batch#12",
    bootcamp:["JS","ReactJS"]}))
}

function responseNotFound(req,res){
    res.writeHead(404,{"Conten-Type":"text/plain"});
    res.end(`Not Found`);
}



server.listen(port);

console.log(`Server listen on port ${port}`);