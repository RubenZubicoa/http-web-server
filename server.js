'use strict'
const http = require('http')
const PORT = process.env.PORT || 3000

const hello = `
<html>
    <head></head>
    <body>
        <h1>Hello world!!</h1>
    </body>
</html>
`

const server = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/html')
    res.end(hello)
})

server.listen(PORT)

