// function * generatorFn(){
//   console.log('开始执行')
//   yield 'wobuhao'
//   return 'nihao'
// }
// // 调用生成器函数会生成一个生成器.
// let g = generatorFn()
// let g2 = generatorFn()

// console.log(g)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// 这里定义了 一个生成器，因为生成器对象也实现了iterator接口，所以可以当自定义的迭代器使用。
// function * nTimes(n){
//   while(n--){
//     yield;
//   }
// }

// for(let i of nTimes(3)){
//   console.log('foo')
// }

// 使用yield实现输入输出
// function * geng(init){
//   console.log(init)
//   console.log(yield)
//   console.log(yield)
// }

// let g = geng('foo')
// g.next('oo')
// g.next('ss')
// g.next('gg')


// 使用*增强yield，让yield能够迭代一个可迭代对象
function * generatorFn(init){
  console.log(init)
  console.log(yield * geng())
  return 'haha'
}

function * geng(){
  yield 'lili'
  return 'ydh'
}

let g = generatorFn('foo')
// console.log(g)
// for(let x of g){
//   console.log(x)
// }
for(let x of g){
  console.log(x)
}