function equalsFn(a,b){
  return a===b
}

class LinkedList{
  constructor(){
    this.count = 0 //元素数量
    this.head = null //头指针
    this.equalsFn =equalsFn //比较函数
  }

  //判断链表是否为空
  isempty() {
    return this.count ===0  
  }

  //向链表尾部添加元素
  push(element){
    const node = new Node(element)
    let current
    if(this.head === null){ //第一张情况如果链表为空，则放在第一个位置，头指针指向新节点
      this.head = node
    }else{
      current = this.head
      while(current.next != null){ //循环遍历得到原链表最后一项
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  //移除指定位置的元素
  removeAt(index){
    if(index>=0&&index<this.count){
      let current = this.head //定义一个变存储当前元素
      if(index === 0){
        this.head = current.next //使头指针指向下一项，以移除第一个元素
      }else{
        let previous //定义一个变量，存储要删除元素的前一个元素
        for(let i=0;i<index;i++){
          previous = current //目标元素的前一个元素
          current = current.next //目标元素
        }
        previous.next = current.next //将目标元素的前一个元素的next指向目标元素的下一个
      }
      this.count--
      return current
    }
    return undefined
  }
  //通过index返回元素
  getElementAt(index){ //index 还是按照数组下标那样计算的index=0为第一个元素
    if(index>=0&&index<=this.count){ //允许获取最后一个元素的next节点即undefined
      let node = this.head
      for(let i=0;i<index;i++){
        node = node.next
      } 
      return node
    }
    return undefined
  }

  //在任意位置插入
  insertOf(index,element){
    if(index>=0&&index<=this.count){
      const node = new Node(element)
      if(index === 0){
        const current = this.head
        this.head = node
        node.next = current
      }else{
        const previous = this.getElementAt(index-1)
        const current = previous.next
        previous.next = node
        node.next = current
      }
      this.count++
      return true
    }
    return false
  }

  //返回指定位置的元素
  indexOf(element){
    let current = this.head
    for(let i=0;i<this.count;i++){
      if(this.equalsFn(element,current.element)){
        return i
      }
      current = current.next
    }
    return -1
  }
}

class Node{
  constructor(element){
    this.element = element
    this.next = undefined
  }
}

const link = new LinkedList()
link.push('1')
link.push('2')
link.push('3')
link.push('4')
console.log(link.getElementAt(3))
console.log(link.indexOf('2'))
link.insertOf(1,'5')
console.log(link.getElementAt(1))