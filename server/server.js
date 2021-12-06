const http = require('http')
const port = 3000

const server = http.createServer()

server.on('request',function(req,res){
  if(req.url === '/'){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.write('asdasdasasd')
    res.end()
  }
})

server.listen(port,()=>{
  console.log(`运行在${port}端口`)
})