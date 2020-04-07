var http = require('http')
var fs = require('fs')
var path = require('path')

var port = 3000
var hostName = 'localhost'

var server = http.createServer(function (req, res) {
    console.log(`-${req.url}-`, req.method)
    if (req.method === 'GET') {
        let fileUrl, filePath;
        if (req.url === '/') {
            fileUrl = '/index.html'
        }
        else {
            fileUrl = req.url
        }
        filePath = path.resolve('./public' + fileUrl)
        const pathExtension = path.extname(filePath)
        if (pathExtension === '.html') {
            fs.exists(filePath, function (exists) {
                if (!exists) {
                    res.statusCode = 404
                    res.setHeader('content-type', 'text/html')
                    res.end(`
                        <!DOCTYPE html>
                        <html>
                            <body>
                            <h1>File not found</h1>
                            <p>Error 404</p>
                            </body>
                        </html> 
                        `)
                    return
                }
                else {
                    res.statusCode = 404
                    res.setHeader('content-type', 'text/html')
                    fs.createReadStream(filePath).pipe(res)
                }
            })
        }
        else {
            res.statusCode = 404
            res.setHeader('content-type', 'text/html')
            res.end(`
                <!DOCTYPE html>
                <html>
                    <body>
                        <h1>File format not supported</h1>
                        <p>Error 404</p>
                        </body>
                </html> 
                `)
            return
        }
    }
    else {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html')
        res.end(`
                <!DOCTYPE html>
                <html>
                    <body>
                        <h1>request method ${req.method} not support</h1>
                        <p>Error 404</p>
                        </body>
                </html> 
                `)
        return
    }
})

const fn = () => {
    console.log(`server running at http://${hostName}:${port}`)
}
server.listen(port, hostName, fn)