const express = require('express')
const app= express()


app.get('/',(req,res)=>{
  res.set({'Access-Control-Allow-Origin':'*'})
  res.send('Hello World')
})

app.listen(3000,()=>{
  console.log('is running in 3000 port')
})