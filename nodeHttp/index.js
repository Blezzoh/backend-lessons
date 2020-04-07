var http = require('http')
var port = 3000
var hostName = 'localhost'

var server = http.createServer(function (req, res) {
    console.log(req.headers)
    res.statusCode = 200
    res.setHeader('content-type', 'text/html');
    res.end(`
    <!DOCTYPE html>
    <html>
        <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        </body>
    </html> 
    `)
})

const fn = ()=>{
    console.log(`server running at http://${hostName}:${port}`)
}
server.listen(port, hostName, fn)