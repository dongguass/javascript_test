class Queue{ //普通队列
  constructor(){
    this.count = 0 //队列中的元素
    this.lowestCount = 0 //始终指向第一个元素
    this.items = {} //用对象属性存储元素
  }

  enqueue(element){
    this.items[this.count] = element //向队列末尾添加元素
    this.count++ 
  }

  dequeue(){
    if(this.isempty()){
      return 
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    // this.count-- 因为是使用对象属性的缘故，不能使count--因为count是作为属性名存在的。
    return result
  }

  peek(){
    if(this.isempty()){
      return 
    }
    return this.items[this.lowestCount]
  }

  isempty(){
    return this.count-this.lowestCount === 0
  }
  size(){
    return this.count-this.lowestCount
  }
}

const queue = new Queue()
console.log(queue.isempty())
queue.enqueue('ydh')
queue.enqueue('xxx')
console.log(queue.items,queue.size())
queue.dequeue()
console.log(queue.items,queue.size())

class Deque{
  constructor(){ //双端队列
    this.count = 0 //队列中的元素
    this.lowestCount = 0 //始终指向第一个元素
    this.items = {} //用对象属性存储元素
  }

  addFront(element){
    
  }
}