class Set{
  constructor(){
    this.items = {}
  }

  has(element){
    return element in this.items
  }

  add(element){
    // 检查新增的元素是否存在
    if(!this.has(element)){
      // 添加一个element的时候，把它同时作为键和值保存，因为这样有利于查找该元素。
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element){
    if(this.has(element)){
      delete this.items[element]
      return true
    }
    return false
  }

  clear(){
    this.items = {}
  }

  size(){
    // keys方法，它返回一个包含给定对象所有属性的数组。
    return Object.keys(this.items).length
  }

  values(){
    // Object.values()方法返回了一个包含给定对象所有属性值的数组。
    return Object.values(this.items)
  }

  // 并集
  union(othderSet){
    // 存放新集合
    const unionSet = new Set()
    // 将调用union函数的集合实例对象的值存入新集合实例中
    this.values().forEach(value=>{
      unionSet.add(value)
    })
    // 将参数集合实例的值存入新集合实例中
    othderSet.values().forEach(value=>{
      unionSet.add(value)
    })
    return unionSet
  }

  // 交集
  intersection(otherSet){
    const interSet = new Set()
    const values = this.values()
    for(let i=0;i<values.length;i++){
      if(otherSet.has(values[i])){
        interSet.add(values[i])
      }
    }
    return interSet
  }

  // 差集
  difference(otherSet){
    const differenceSet = new Set()
    this.values().forEach(value=>{
      if(!otherSet.has(value)){
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)

const setB = new Set()
setB.add(4)
setB.add(5)
setB.add(6)

const unionAB = setA.union(setB)
console.log(unionAB)