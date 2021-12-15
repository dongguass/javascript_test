// let num = 1
// let obj = {}
// let arr = ['a','b','c']

// console.log(num[Symbol.iterator])
// console.log(obj[Symbol.iterator])
// console.log(arr[Symbol.iterator]())

// 可迭代对象
let arr = ['foo','bar']

console.log(arr[Symbol.iterator])

let iter = arr[Symbol.iterator]()
console.log(iter)

console.log(iter.next())
arr.splice(1,0,'baz')
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


// 自定义可迭代对象
class Counter{
  constructor(limit){
    this.count = 1
    this.limit = limit
  }

  next(){
    if(this.count<=this.limit){
      return {done:false,value:this.count++}
    }else{
      return {done:true,value:undefined}
    }
  }
  [Symbol.iterator](){
    return this
  }
}

let counter = new Counter(3)
for(let i of counter){
  console.log(i)
}
for(let i of counter){
  console.log(i)
}