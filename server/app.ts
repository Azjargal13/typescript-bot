// this is server web service

var http = require('http')
const PORT = 8001

var express = require("express")
var bodyParser = require("body-parser")
var server = express()

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//server.use(express.json());
// create a func which handles request and send simple response

// function handleRequest(req, res) {
//     res.end("I am working " + req.url, req.body)
// }

server.get('/', (req, res) => {
    res.send("i am working correctly " + req.url)
})

server.post('/slack/', (req, res) => {
    let payload = req.body;
    //var query1 = req.body;
    console.log(payload)
    //res.send(query1)
    //var query2=req.body.var2;
    //res.json({ requestBody: req.body })
})
// create web server obj calling createServer func

//var server = http.createServer(handleRequest)


// start server
server.listen(PORT, function () {
    // callback trigger when server is successfully listening
    console.log("Server listening on : http://localhost:%s", PORT)
})