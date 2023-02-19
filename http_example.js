const http = require('http')

console.log(http.METHODS)
console.log(http.STATUS_CODES)

//create server
const server  = http.createServer((req,res)=>{
res.write(`<h1>This is the response from server</h1>`)
res.end()
})

server.listen(5000)