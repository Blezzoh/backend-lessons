var express = require('express')
var http = require('http')

var port = 3000
var hostName = 'localhost'
var app = express()

app.use((req, res, next) =>{
    console.log(req.headers)
    res.statusCode = 200
    res.setHeader('content-type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html>
        <body>
        <h1>Server with Express</h1>
        <p>My first paragraph.</p>
        </body>
    </html> 
    `)
})

const server = http.createServer(app)
server.listen(port, hostName, ()=>{
    console.log(`server running at http://${hostName}:${port}`)
})

