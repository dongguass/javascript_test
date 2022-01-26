const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const port = 3000

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,mytoken");
  next();
});

app.get('/',(req,res)=>{
  res.set({
    'Access-Control-Allow-Origin':'*',
  })
  res.send('nihao')
})

app.post('/jsons',(req,res)=>{
  let data = '接收到JSON数据了'
  res.set({
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
  })
  console.log(req.body)
  res.send(data)
})

app.listen(port,()=>{
  console.log('running in 3000 port')
})
