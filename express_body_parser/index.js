var express = require('express')
var http = require('http')
var morgan = require('morgan')
const bodyParser = require('body-parser')
const itemRouter = require('./routes/itemRouter')
var port = 3000
var hostName = 'localhost'
var app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())  
app.use(express.static(__dirname + '/public'))

app.use('/item', itemRouter);

app.use((req, res, next) =>{
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

