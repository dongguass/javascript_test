
// 因为var将i定义在全局作用域，且会先循环完所以i的值是6
// for(var i =0;i<=5;i++){
//   setTimeout(() => {
//     console.log(i)
//   }, i*1000);
// }

// 闭包解决该问题
for(var i = 0;i<=5;i++){
  (function(j){
    setTimeout(() => {
      console.log(j)
    }, j*1000);
  })(i)
}

