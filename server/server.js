const http = require('http')
const port = 3000

const server = http.createServer()

server.on('request',function(req,res){
  if(req.url === '/'){
    res.setHeader('status','200 OK')
    res.setHeader('Set-Cookie','cookieid=2021ydh;max-age = 1000')
    res.setHeader('Access-Control-Allow-Origin',req.headers.origin)
    res.write('你好，接好cookie')
    res.end()
  }
})

server.listen(port,()=>{
  console.log(`运行在${port}端口`)
})