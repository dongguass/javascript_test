const axios = require('axios')

exports.getEmg = function(methods,url){
  return new Promise((resolve,reject)=>{
    axios({
      methods,
      url
    }).then((result) => {
      resolve(result.data)
    }).catch((err) => {
      reject(()=>{
        console.log('出错了,请重试')
      })
    });
  })
}