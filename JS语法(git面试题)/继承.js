// es5实现继承 (第一种方式)
function Super(){}

Super.prototype.getnumber = function(){
  return 1
}


function Sub(){}
// 先修改构造函数的prototype对象，后创建实例对象才能实现继承。
Sub.prototype = Object.create(Super.prototype,{
  constructor: {
    value : Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

let s = new Sub()


let a = s.getnumber()
console.log(a)