const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile(__dirname,null,function(err,data){
        if(err){
            res.writeHead(404)
            res.write('File Not Found !')
        }else {
            res.write(data)
        }
        res.end()
    })
    // res.writeHead(200,{'Content-type': 'text/plain'})
    // res.write('Hello World')
    res.end()
}).listen(8081,function(){
    console.log("Server is on port 8081")
})