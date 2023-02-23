/*v
var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337,'127.0.0.1');
*/

const express = require('express')
const app = express()

//http://127.0.0.1:3000/asd asi entramos
app.get('/asd', function (req, res) {
  res.send('Telematica')
})

app.listen(3000)
