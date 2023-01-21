const http = require('http');
const port = process.env.PORT|| 3001;

//http server handle request from browser
//setiap ada request harus ada respon
//localhost:3001
const server = http.createServer(function(req,res){ //Callback Function
    res.end('Hi bootcamp');
});

server.listen(port);

console.log(`Server listen on port ${port}`);