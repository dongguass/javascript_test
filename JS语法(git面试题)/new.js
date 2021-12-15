function Person(name,age){
  this.name = name
  this.age = age
}

function create(Person,name,age){
  //创建空对象
  let obj = new Object()

  //取得构造函数
  let con = [].shift.call(arguments)

  //链接原型
  obj.__proto__ = con.prototype

  // 绑定this
  let result = con.apply(obj,arguments)
  // 确保new出来的是一个对象
  return typeof result === 'object'? result:obj
}

let person1 = create(Person,'ydh',18)
console.log(person1)
console.log(Person.prototype === person1.__proto__)
console.log(Person.prototype.constructor)