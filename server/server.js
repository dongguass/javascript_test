const http = require('http')
const url = require('url')
const port = 3000

const server = http.createServer()

server.on('request',function(req,res){
  let arg = url.parse(req.url).query
  console.log(req.url)
  // console.log(typeof arg)
  if(req.url === '/a?name=ydh'){
    res.setHeader('Access-Control-Allow-Origin',req.headers.origin)
    res.setHeader('Access-Control-Allow-Credentials',true)
    res.setHeader('Set-Cookie','bookname=ydh;SameSite=None;Secure')
    res.write('asdasdasasd')
    res.end()
  }else if(req.url === '/api'){
    console.log('2')
    res.write('jsonp nihao')
    res.end()
  }
})

server.listen(port,()=>{
  console.log(`运行在${port}端口`)
})