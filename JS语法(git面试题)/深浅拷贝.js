// 因为给b赋值的是一个引用变量 所以a，b引用的都是同一个对象
// let a ={
//   age :  18
// }

// let b = a
// a.age = 19
// console.log(b.age)

// 浅拷贝
// 1. 使用Object.assign()方法
let a = {
  age : 18,
  deep: {
    name: 'ydh'
  }
}
let b = Object.assign({},a)
a.age = 19
a.deep.name = 'ssh'
console.log(b.age)
//因为是浅拷贝，所以深层对象的属性name依旧会被改变
console.log(b.deep.name)

// 2. 使用...展开运算符
let c = {
  age: 20
}
let d = {...c}
c.age = 22
console.log(d.age)

// 深拷贝
// 这个问题通常可以通过 JSON.parse(JSON.stringify(object)) 来解决。