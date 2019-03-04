const http = require('http')
const module1 = require('./module')
const module2 = require('./module2')

http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-type': 'text/plain'})
    // res.write('Hello World')
    res.write(module2.myVariable)
    module2.myfunction()
    res.end()
}).listen(8081,function(){
    console.log("Server is on port 8081")
})