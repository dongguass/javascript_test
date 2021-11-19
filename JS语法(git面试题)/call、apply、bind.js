// 模拟实现call和apply
Function.prototype.myCall = function(context){
  // 如果没有传递第一个参数进来，则默认由window调用函数
  let contexts = context || globalThis
  // 因为call和apply是由函数调用，此处的this是调用该方法的函数
  contexts.fn = this
  // 取出参数, slice(1) 选取下标为1直到最后一个元素的所有元素
  let args = [...arguments].slice(1)
  let result = contexts.fn(...args)

  //删除 fn
  delete contexts.fn
  return result
}

Function.prototype.myApply = function(context){
  let contexts = context || globalThis
  contexts.fn = this
  let result
  if(arguments[1]){
    result = contexts.fn(...arguments[1])
  }else{
    result = contexts.fn()
  }

  delete contexts.fn
  return result
}

function add(a,b,c){
  console.log(this.name+a+b+c)
}

let name = 'ydh'
let hi = {
  name : 'zzz'
}

add.myCall(hi,1,2,3)
add.myApply(hi,[1,2,3])

add.bind()